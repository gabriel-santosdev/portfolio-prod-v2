import React from "react";
import validator from 'validator'
import { useState } from "react";
import { contacts } from "../Data";
import Modal from "./Modal/Modal";
import axios from "axios";


const Contact = () => {

  const initialFormValue = {
    name: '',
    message: '',
    email: '',
    accessKey: '11a3190a-4e47-415c-8eee-cff28b898807',
    subject: 'StaticForms - Contact Form',
  }

  const [form, setForm] = useState(initialFormValue);
  const [valid, setValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value)
    name === "email" && setValid(validator.isEmail(value));
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (valid) {
      const API = axios.create({
        baseURL: 'https://api.staticforms.xyz',
        headers: {
          "Content-Type": 'application/json'
        },
      })

      API.post('/submit', JSON.stringify(form))
        .then((response) => {
          setMessage('Sua mensagem foi enviada!')
        })
        .catch((error) => {
          setMessage('Falha ao enviar sua mensagem.')
          setError(true)
        })
        .finally(() => {
          setShowModal(true)
        })

    } else {
      setValid(false);
    }
  }

  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contato</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit} action="https://api.staticforms.xyz/submit" method="post" className="mt-8 flex  gap-12 flex-wrap justify-center">
          <input type="hidden" name="accessKey" value="3d7e0189-0018-49b5-9a87-067a618d57fd" />
          <input type="hidden" name="redirectTo" target="_blank" value="https://gabrielsantos.tec.br/#contact" />
          <div>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Nome"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                style={{ borderColor: valid ? '#0369A1' : 'red' }}
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="E-mail"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              name="message"
              className="outline-none bg-transparent border border-solid border-blue resize-none text-[0.9rem] p-2 h-40 w-80"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="mt-2 text-end">
              <button type="submit" className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md">
                Enviar mensagem
              </button>
            </div>
          </div>

        </form>
      </div>
      {showModal && <Modal message={message} error={error} changeToggle={() => setShowModal(false)} />}

    </div>
  );
};

export default Contact;
