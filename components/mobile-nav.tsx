"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  {label: "Projetos", href: "#projetos"},
  {label: "Serviços", href: "#servicos"},
  {label: "Sobre", href: "#sobre"},
  {label: "Experiência", href: "#experiencia"}
];
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return <>
    <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    {open && <nav className="mobile-panel" aria-label="Navegação móvel">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href="#contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight size={16}/></a></nav>}
  </>;
}
