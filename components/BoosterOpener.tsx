"use client";

import { useState, useEffect } from "react";

// Conceito novo: "interface" do TypeScript, igual uma interface do Java,
// só que aqui descreve o formato de um objeto de dados.
interface Card {
  id: string;
  name: string;
  rarity: "comum" | "rara" | "epica" | "lendaria";
  imageUrl: string;
}

// Pesos de sorteio: quanto maior o número, mais chance de sair.
const RARITY_WEIGHTS: Record<Card["rarity"], number> = {
  comum: 60,
  rara: 30,
  epica: 8,
  lendaria: 2,
};

function sortearCarta(cartasDisponiveis: Card[]): Card {
  const pool: Card[] = [];
  cartasDisponiveis.forEach((card) => {
    const peso = RARITY_WEIGHTS[card.rarity as Card["rarity"]];
    for (let i = 0; i < peso; i++) {
      pool.push(card);
    }
  });
  const indiceAleatorio = Math.floor(Math.random() * pool.length);
  return pool[indiceAleatorio];
}

export default function BoosterOpener() {
  const [cartas, setCartas] = useState<Card[]>([]);
  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => setCartas(data));
  }, []);
  const [cartaRevelada, setCartaRevelada] = useState<Card | null>(null);

  function abrirBooster() {
    const carta = sortearCarta(cartas);
    setCartaRevelada(carta);
  }

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h1 className="text-3xl font-bold text-slate-100">Abra seu Booster</h1>

      {!cartaRevelada && (
        <button
          onClick={abrirBooster}
          className="rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
        >
          Abrir Booster
        </button>
      )}

      {cartaRevelada && (
        <div className="flex flex-col items-center gap-4">
          <img
            src={cartaRevelada.imageUrl}
            alt={cartaRevelada.name}
            className="w-48 rounded-xl shadow-2xl"
          />
          <p className="text-xl font-semibold text-slate-100">
            {cartaRevelada.name} — <span className="uppercase text-yellow-400">{cartaRevelada.rarity}</span>
          </p>
          <button
            onClick={() => setCartaRevelada(null)}
            className="rounded-lg bg-slate-700 px-6 py-2 text-white hover:bg-slate-600"
          >
            Abrir outro
          </button>
        </div>
      )}
    </div>
  );
}