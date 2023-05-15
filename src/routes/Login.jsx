import React, { useState } from "react";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const formHandler = (event) => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9999/api/user/login", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  //musterilerin telefonu ve adresleri tıkladığımızda gözükecek, crud islemleri yapılacak
  const load = () => {
    try {
      setLoading(true);
      formSubmitHandler();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="pt-8 pb-8 text-2xl">
        Beyaz Eşya Bayii Otomasyon Sistemi Admin Paneli
      </p>
      <form className="card space-y-5 justify-content-center">
        <span className="p-float-label">
          <InputText
            placeholder="Kullanıcı Adı"
            className="w-full p-inputtext-lg"
            id="username"
            onChange={formHandler}
          />
          <label htmlFor="username">Kullanıcı Adı</label>
        </span>
        <span className="p-float-label">
          <Password
            className="p-inputtext-lg"
            inputId="password"
            placeholder="Şifre"
            onChange={formHandler}
          />
          <label htmlFor="password">Şifre</label>
        </span>
        <div className="card justify-start gap-5">
          <Button
            label="Giriş"
            size="medium"
            icon="pi pi-check"
            loading={loading}
            onClick={formSubmitHandler}
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}
