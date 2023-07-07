/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../home/Title'
import { FiSend } from 'react-icons/fi'
import { useState } from 'react'
import axios from 'axios'
const Contact = () => {
  const [clientName, setClientName] = useState('')
  const [email, setEmail] = useState('')
  const [messages, setMessages] = useState('')
  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errMessages, setErrMessage] = useState(false)
  // ================= Error Messages End here ===================
  const [seuccessMsg, setSuccessMsg] = useState('')
  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }
  // ================= Email Validation End here =================
  const handleSend = (e) => {
    e.preventDefault()
    if (!clientName) {
      setErrClientName(true)
    }
    if (!email) {
      setErrEmail(true)
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true)
      }
    }
    if (!messages) {
      setErrMessage(true)
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post('https://getform.io/f/2b8f221f-0d53-4312-b8e3-df40ddbcd5c8', {
        name: clientName,
        email: email,
        messages: messages
      })
      setSuccessMsg(`Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`)
      setClientName('')
      setEmail('')
      setMessages('')
    }
  }
  const handleName = (e) => {
    setClientName(e.target.value)
    setErrClientName(false)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail(false)
  }
  const handleMessages = (e) => {
    setMessages(e.target.value)
    setErrMessage(false)
  }

  return (
    <div className='w-full'>
      <Title title='Get' subTitle='in Touch' />
      <div className='p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20'>
        <div className='w-full lgl:w-1/2'>
          <p className='flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Address:
            </span>
            Da Nang, VietNam
          </p>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Phone:
            </span>
            +968 97859628
          </p>
        </div>
        <div className='w-full lgl:w-1/2'>
          <p className='flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Email:
            </span>
            kakashi21042001@gmail.com
          </p>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Freelance:
            </span>
            Abailable
          </p>
        </div>
      </div>
      {/* Send messages */}

      <div className='w-full mt-10'>
        <Title title='Send' subTitle='Messages' />
        {seuccessMsg ? (
          <p className='text-center text-base font-titleFont p-20 text-designColor'>{seuccessMsg}</p>
        ) : (
          <form
            id='form'
            action='https://getform.io/f/2b8f221f-0d53-4312-b8e3-df40ddbcd5c8'
            method='POST'
            className='p-6 flex flex-col gap-6'
          >
            <div className='w-full flex lgl:flex-row gap-4 lgl:gap-10 justify-between'>
              <input
                onChange={handleName}
                value={clientName}
                type='text'
                placeholder='Full name'
                className={`${
                  errClientName
                    ? 'border-red-600 focus-visible:border-red-600'
                    : 'border-zinc-600 focus-visible:border-designColor'
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
              />
              <input
                onChange={handleEmail}
                value={email}
                type='email'
                placeholder='Email address'
                className={`${
                  errEmail
                    ? 'border-red-600 focus-visible:border-red-600'
                    : 'border-zinc-600 focus-visible:border-designColor'
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              cols='30'
              rows='4'
              placeholder='Your Message'
              className={` ${
                errMessages
                  ? 'border-red-600 focus-visible:border-red-600'
                  : 'border-zinc-600 focus-visible:border-designColor'
              }w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
            ></textarea>
            <button
              onClick={handleSend}
              className='text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200'
            >
              Send Message <span>{<FiSend />}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
