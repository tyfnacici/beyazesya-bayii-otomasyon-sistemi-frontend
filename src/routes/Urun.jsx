import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function RemovableSortDemo() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   ProductService.getProductsMini().then((data) => setProducts(data));
  // }, []);

  return (
    <>
      <div className="flex place-content-between pb-4">
        <div className="space-x-4">
          <InputText
            value={value}
            placeholder="Urun ID"
            onChange={(e) => setValue(e.target.value)}
          />
          <Button label="Editle" />
        </div>
        <div className="">
          <InputText
            value={value}
            placeholder="Arama"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="card">
        <DataTable
          value={products}
          removableSort
          tableStyle={{ minWidth: "%100" }}
        >
          <Column field="id" header="Id" style={{ width: "5%" }}></Column>
          <Column field="ad" header="Ad" style={{ width: "10%" }}></Column>
          <Column
            field="marka"
            header="Marka"
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="kategori"
            header="Kategori"
            style={{ width: "45%" }}
          ></Column>
          <Column
            field="fiyat"
            header="Fiyat"
            style={{ width: "30%" }}
          ></Column>
          <Column
            field="stokDurumu"
            header="Stok Durumu"
            style={{ width: "30%" }}
          ></Column>
          <Column
            field="ureticidenSatinAlimFiyati"
            header="Üreticiden Satın Alım Fiyatı"
            style={{ width: "30%" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
