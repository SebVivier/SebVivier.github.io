"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, ShoppingBag, Phone, MapPin, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BRAND = {
  name: "Menchi's Touch",
  tagline: "Doudous & couvertures cousus main avec amour",
};

const CONTACT_EMAIL = "ambre.trevisan@yahoo.com"; // change to yours

const SOCIALS = {
  instagram: "https://www.instagram.com/ambre7338",
};

const CATEGORIES = [
  { key: "all", label: "Tous" },
  { key: "doudou", label: "Doudous" },
  { key: "couverture", label: "Couvertures" },
  { key: "accessoire", label: "Accessoires" },
];

function placeholderPattern(bg = "#fde68a", dot = "#fef3c7") {
  const svg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
      <defs>
        <pattern id='dots' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
          <circle cx='3' cy='3' r='3' fill='${dot}'/>
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='${bg}'/>
      <rect width='100%' height='100%' fill='url(#dots)' opacity='0.45'/>
    </svg>
  `);
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

const PRODUCTS = [
  {
    id: "p1",
    name: "Doudou Lapin Nuage",
    desc: "Coton bio ultra-doux, oreilles nouées pour les petites mains.",
    price: 28,
    category: "doudou",
    image: placeholderPattern("#fde68a", "#fef3c7"),
    tags: ["coton bio", "lavable"],
  },
  {
    id: "p2",
    name: "Couverture Berceau Étoiles",
    desc: "Patchwork de tissus certifiés OEKO-TEX®.",
    price: 59,
    category: "couverture",
    image: placeholderPattern("#a7f3d0", "#d1fae5"),
    tags: ["patchwork", "oeko-tex"],
  },
  {
    id: "p3",
    name: "Doudou Ourson Sourire",
    desc: "Broderie personnalisable au prénom de l'enfant.",
    price: 32,
    category: "doudou",
    image: placeholderPattern("#bfdbfe", "#dbeafe"),
    tags: ["personnalisable"],
  },
  {
    id: "p4",
    name: "Couverture Nomade Arc-en-ciel",
    desc: "Légère et chaude, parfaite pour la poussette.",
    price: 64,
    category: "couverture",
    image: placeholderPattern("#fecaca", "#fee2e2"),
    tags: ["poussette", "chaude"],
  },
  {
    id: "p5",
    name: "Bavoir Réversible",
    desc: "Deux motifs, une fixation facile par pression.",
    price: 16,
    category: "accessoire",
    image: placeholderPattern("#ddd6fe", "#ede9fe"),
    tags: ["réversible"],
  },
];

function Doodle() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 800 600">
      <g opacity="0.15">
        <path d="M50,150 C150,50 250,250 350,150 S550,50 650,150" fill="none" stroke="currentColor" strokeWidth="6" className="text-pink-300"/>
        <path d="M100,450 C200,350 300,550 400,450 S600,350 700,450" fill="none" stroke="currentColor" strokeWidth="6" className="text-indigo-300"/>
        <circle cx="120" cy="80" r="14" className="fill-amber-300"/>
        <circle cx="740" cy="520" r="10" className="fill-emerald-300"/>
      </g>
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-amber-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-amber-200 grid place-items-center shadow">
            <Sparkles className="h-5 w-5"/>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tight">{BRAND.name}</p>
            <p className="text-xs text-neutral-500">{BRAND.tagline}</p>
          </div>
        </div>
        <nav className="ml-auto flex items-center gap-2">
          <a href="#produits" className="px-3 py-2 rounded-xl hover:bg-amber-50">Produits</a>
          <a href="#apropos" className="px-3 py-2 rounded-xl hover:bg-amber-50">À propos</a>
          <a href="#contact" className="px-3 py-2 rounded-xl hover:bg-amber-50">Contact</a>
          <a href={SOCIALS.instagram} className="ml-2 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-amber-50">
            <Instagram className="h-4 w-4"/> Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Doodle />
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Des créations <span className="text-amber-600">faites main</span> pour les petits trésors ✨
          </h1>
          <p className="mt-4 text-neutral-600 text-lg">
            Doudous rassurants, couvertures douillettes et accessoires cousus avec soin dans notre atelier.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#produits"><Button size="lg" className="rounded-2xl">Voir les produits</Button></a>
            <a href="#contact"><Button variant="outline" size="lg" className="rounded-2xl">Nous écrire</Button></a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
            <li className="inline-flex items-center gap-2 bg-white/80 border rounded-xl px-3 py-2"><Star className="h-4 w-4"/>Tissus certifiés</li>
            <li className="inline-flex items-center gap-2 bg-white/80 border rounded-xl px-3 py-2"><Star className="h-4 w-4"/>Pièces uniques</li>
            <li className="inline-flex items-center gap-2 bg-white/80 border rounded-xl px-3 py-2"><Star className="h-4 w-4"/>Personnalisable</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 p-4 shadow-lg">
            <div className="grid grid-cols-2 gap-4 h-full">
              {PRODUCTS.slice(0,4).map((p) => (
                <div key={p.id} className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur border">
                  <img src={p.image} alt="Motif tissu" className="h-full w-full object-cover"/>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductGallery() {
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(() => (
    filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter)
  ), [filter]);

  return (
    <section id="produits" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Nos créations</h2>
          <p className="text-neutral-600">Chaque pièce est cousue à la main dans notre atelier.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <Button key={c.key} variant={filter === c.key ? "default" : "outline"} onClick={() => setFilter(c.key)} className="rounded-2xl">
              {c.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }}>
            <Card className="rounded-3xl overflow-hidden border-amber-100 shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-48 w-full object-cover"/>
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs border">
                  <ShoppingBag className="h-3 w-3"/> {p.category}
                </span>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {p.tags?.map(t => (
                      <span key={t} className="text-xs rounded-full bg-amber-50 border border-amber-200 px-2 py-1">{t}</span>
                    ))}
                  </div>
                  <div className="font-semibold">{p.price.toFixed(0)}€</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-sm text-neutral-600">
        Besoin d'une broderie prénom, d'une taille spécifique ou d'un motif particulier ? <a href="#contact" className="underline">Contactez-nous</a> pour une commande personnalisée.
      </p>
    </section>
  );
}

function About() {
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold">À propos de l'atelier</h2>
          <p className="mt-3 text-neutral-700">
            Nous créons des doudous et des couvertures pour enfants, avec une attention particulière au confort et à la sécurité.
            Chaque pièce est conçue, découpée et cousue à la main, dans des tissus sélectionnés avec soin.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {[
              "Tissus certifiés OEKO-TEX®",
              "Créations personnalisables",
              "Petites séries & pièces uniques",
              "Fabrication française",
            ].map(f => (
              <li key={f} className="flex items-center gap-2 rounded-2xl border bg-white p-3">
                <Star className="h-4 w-4"/>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border bg-white shadow">
            <img src={placeholderPattern("#fef9c3", "#fde68a")} alt="Atelier couture" className="h-full w-full object-cover"/>
            <div className="absolute bottom-3 right-3 rounded-2xl bg-white/90 px-3 py-2 text-xs border">Atelier & tissus</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande depuis le site – ${name || "Sans nom"}`);
    const body = encodeURIComponent(`Bonjour,\\n\\n${message}\\n\\nNom: ${name}\\nEmail: ${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <Doodle />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-3 text-neutral-700">
              Une question, une commande personnalisée ou un devis ? Écrivez-nous, nous répondons rapidement.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> <span>+33 6 00 00 00 00</span></p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> <span>France</span></p>
            </div>
          </div>

          <Card className="rounded-3xl border-amber-100 shadow-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nom</label>
                    <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Votre nom" className="rounded-2xl mt-1"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="votre@email.fr" className="rounded-2xl mt-1" required/>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Parlez-nous de votre projet..." className="rounded-2xl mt-1 min-h-[120px]"/>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-neutral-500">Envoi via votre logiciel de messagerie.</p>
                  <Button type="submit" className="rounded-2xl"><Mail className="h-4 w-4 mr-2"/> Envoyer</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 grid md:grid-cols-3 gap-6">
        <div>
          <p className="font-semibold">{BRAND.name}</p>
          <p>{BRAND.tagline}</p>
        </div>
        <div>
          <p className="font-semibold">Navigation</p>
          <ul className="mt-2 space-y-1">
            <li><a href="#produits" className="hover:underline">Produits</a></li>
            <li><a href="#apropos" className="hover:underline">À propos</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Suivre</p>
          <ul className="mt-2 space-y-1">
            <li><a className="inline-flex items-center gap-2 hover:underline" href={SOCIALS.instagram}><Instagram className="h-4 w-4"/> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-6">© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen text-neutral-900" style={{ background: "linear-gradient(180deg, #fff 0%, #fff8e1 60%, #ffffff 100%)" }}>
      <Header />
      <main>
        <Hero />
        <ProductGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
