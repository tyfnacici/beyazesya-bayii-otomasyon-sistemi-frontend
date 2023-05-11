import React, { useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Login() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="pt-8 pb-8 text-2xl">
        Beyaz Eşya Bayii Otomasyon Sistemi Admin Paneli
      </p>
      <div className="card space-y-5 w-full flex-row justify-content-center">
        <span className="p-float-label w-full ">
          <InputText
            placeholder="Kullanıcı Adı"
            className="w-full p-inputtext-lg"
            id="username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="username">Kullanıcı Adı</label>
        </span>
        <span className="p-float-label w-full">
          <Password
            className="w-full p-inputtext-lg"
            inputId="password"
            placeholder="Şifre"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="password">Şifre</label>
        </span>
        <div className="card flex justify-start gap-5">
          <Button
            label="Giriş"
            size="medium"
            icon="pi pi-check"
            loading={loading}
            onClick={load}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
