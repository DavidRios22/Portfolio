import React, { useState, useEffect } from "react"

export default function Home() {
  const helloArray = [
    "Hello",
    "Hola",
    "Hallo",
    "Bonjour",
    "您好",
    "হ্যালো",
    "Guten tag",
    "Aloha",
    "안녕하세요",
    "გამარჯობა",
    "Moien",
    "Sveiki",
    "سلام",
    "Ciao",
    "សួស្តី",
    "שלום",
    "Здравейте",
    "Salom",
    "Привет",
    "Niltze Tialli Pialli",
    "γεια",
    "S̄wạs̄dī",
    "ဟယ်လို",
    "Olá",
    "Akkam",
    "Tashi delek",
    "Avuxeni",
    "Selamat pagi",
    "Bunâ",
    "வணக்கம்",
    "สวัสดี",
    "Kamusta",
    "Mwaramutse",
    "Merhaba",
    "ສະບາຍດີ",
    "сайн уу",
    "Szia",
    "Kumusta",
    "Talofa",
    "Thobela",
    "السلام عليكم",
    "こんにちは",
    "Ya’at’eeh",
    "Salve",
    "Mba'éichapa",
    "Ndewo",
    "Dumela",
    "Ahoj",
    "Hallå",
    "Kia ora",
    "नमस्ते",
    "Hello",
  ]

  // * START OF TIME FUNCTION

  const [output, setOutput] = useState(0)

  const slowToFast = (delay) => {
    let count = 0

    const updateCount = () => {
      setOutput(count)
      count++

      if (count <= 40) {
        setTimeout(updateCount, delay)

        if (delay > 60) {
          delay *= 0.8
        }
      } else if (count < 52) {
        setTimeout(updateCount, delay)
        delay *= 1.2
      }
    }

    updateCount()
  }

  useEffect(() => {
    slowToFast(400) // Start with 1000ms (1 second) delay
  }, [])

  // * START OF SCROLL FUNCTION

  return (
    <div>
    <div className="home">
      <p className="home-text">{helloArray[output]}</p>
    </div>
    <div className="lower">
      <p className="lower-text">THIS IS LOWER</p>
    </div>
    </div>
  )
}
