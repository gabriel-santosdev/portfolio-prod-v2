import React from "react";
import { contacts } from "../Data";

const Contact = () => {
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
        <form action="https://api.staticforms.xyz/submit" method="post" className="mt-8 flex  gap-12 flex-wrap justify-center">
          <input type="hidden" name="accessKey" value="3d7e0189-0018-49b5-9a87-067a618d57fd" />
          <input type="hidden" name="redirectTo" target="_blank" value="https://gabrielsantos.tec.br/#contact" />
          <div>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Nome"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
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
              required
            ></textarea>
            <div className="mt-2 text-end">
              <button className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md">
                Enviar mensagem
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
