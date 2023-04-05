import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render, screen ,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";



describe("Emoji Search Master Testleri", () => {

  beforeEach(() => {
    render(<App />);
  });

  test("Header render ", () => {
    let header;
    //Emoji Search metni içeren element header değişkenine atandı
    header = screen.getByText("Emoji Search");
    //header değişkeninin sayfada bulunması durumu kontrol edildi
    expect(header).toBeInTheDocument();
  });

  test("Proje ilk çalıştığında listenin kontrolü", () => {
    //Click to copy emoji elementini clickToCopy değişkenine atandı 
    const clickToCopy = screen.getAllByText("Click to copy emoji");
    //clickToCopy'nin 20 kez bulunup bulunmadığı kontrol edildi;
    expect(clickToCopy).toHaveLength(20);
  });

  test("emoji arama",()=>{
    //textbox değeri alındı 
     const input = screen.getByRole("textbox");
     //textbox değeri 100 ile değiştirildi.
     fireEvent.change(input, { target: { value: "100" } });
    //100 metnini içeren 1 elementin olup olmama durumu kontrol edildi
     expect(screen.getAllByText(/100/i)).toHaveLength(1);

  })

   test("emoji kopyalama", () => {
     let Emoji;
     Emoji = screen.getByText("100") ;
     // Emoji elementine tıklanıldı
     fireEvent.click(Emoji);
     //kopyalınan emoji ile beklenen emoji aynı mı kontrol edildi
     expect(Emoji.parentElement.getAttribute("data-clipboard-text")).toMatch("💯");
   });

});



