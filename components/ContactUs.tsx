<<<<<<< HEAD
'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="flex flex-col items-center gap-12">
            <h1 className='text-4xl text-rose-400'>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex items-center justify-between gap-12">
              <div className='mb-5'>
                  <label
                  htmlFor='name'
                  className='mb-3 block text-base font-medium text-black'
                  >
                  Full Name
                  </label>
                  <input
                  type='text'
                  placeholder='Full Name'
                  className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('name', { required: true })}
                  />
              </div>
              <div className='mb-5'>
                  <label
                  htmlFor='email'
                  className='mb-3 block text-base font-medium text-black'
                  >
                  Email Address
                  </label>
                  <input
                  type='email'
                  placeholder='example@domain.com'
                  className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('email', { required: true })}
                  />
              </div>
          </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-black'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div className='w-full grid place-items-center'>
          <button className='hover:shadow-form rounded-md bg-rose-500 hover:bg-rose-600 py-3 px-8 text-base font-semibold text-white outline-none transition-all duration-200 cursor-pointer'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
=======
'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex items-center justify-between gap-12">
            <div className='mb-5'>
                <label
                htmlFor='name'
                className='mb-3 block text-base font-medium text-black'
                >
                Full Name
                </label>
                <input
                type='text'
                placeholder='Full Name'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                {...register('name', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label
                htmlFor='email'
                className='mb-3 block text-base font-medium text-black'
                >
                Email Address
                </label>
                <input
                type='email'
                placeholder='example@domain.com'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                {...register('email', { required: true })}
                />
            </div>
        </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='w-full grid place-items-center'>
        <button className='hover:shadow-form rounded-md bg-rose-500 hover:bg-rose-600 py-3 px-8 text-base font-semibold text-white outline-none transition-all duration-200 cursor-pointer'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
>>>>>>> 45668a71b3855042b0de6ca95fba425a741a3140
