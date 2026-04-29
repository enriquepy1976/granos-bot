// TRACKER DE GRANOS — datos actualizados al 29/04/2026
window.TRACKER_DATA = {
  fecha: '29/04/2026',
  pizarra: { Trigo:210, 'Maíz':200, Girasol:360, Soja:314, Cebada:205 },
  matba:   { Trigo:191.6, 'Maíz':190, Girasol:0, Soja:324.3, Cebada:215 },
  negocios: [
    // Pablo Cocola
    {grano:'Trigo',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:222,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Dic/Ene 2026/27',fecha:'28/04/2026',obs:'Trigo qq 26/27 dic-ene'},
    {grano:'Trigo',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:227,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Ene 2027',fecha:'29/04/2026',obs:''},
    {grano:'Cebada',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:210,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Abr/May 2026',fecha:'21/04/2026',obs:'Cebada forr QQ'},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:200,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May 2026',fecha:'21/04/2026',obs:''},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:195,prima:0,gastos:20,merma:0,com:1,par:0,pos:'20/5 al 20/6',fecha:'21/04/2026',obs:''},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:190,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Jul/Ago 2026',fecha:'21/04/2026',obs:''},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:380,prima:0,gastos:7,merma:0.5,com:1,par:0,pos:'Disponible',fecha:'28/04/2026',obs:'Común. Sin flete salida ni paritaria. 380 lleno.'},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Fija a término',precio:360,prima:40,gastos:7,merma:0.5,com:1,par:0,pos:'Jun/Jul',fecha:'17/04/2026',obs:'Común Jun/Jul'},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:360,prima:30,gastos:7,merma:0.5,com:1,par:0,pos:'Disponible Oleico',fecha:'17/04/2026',obs:'Oleico'},
    {grano:'Girasol',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:380,prima:10,gastos:20,merma:0.5,com:1,par:0,pos:'May 2026',fecha:'28/04/2026',obs:'Girasol común Mayo QQ'},
    {grano:'Girasol',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:380,prima:20,gastos:20,merma:0.5,com:1,par:0,pos:'May 2026 Oleico',fecha:'28/04/2026',obs:'Oleico Mayo QQ'},
    {grano:'Maíz',dest:'Tandil',comp:'Pablo Cocola',cond:'Fija a término',precio:162,prima:0,gastos:0,merma:0.5,com:1,par:0,pos:'Jul/Ago 2026',fecha:'17/04/2026',obs:'Puesto en Tandil. 2 pts libres + USD 4/pto. Sin paritaria ni flete salida. Pago 10 días.'},
    {grano:'Soja',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:315,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May 2026',fecha:'28/04/2026',obs:'Con cupo'},
    {grano:'Soja',dest:'Tandil',comp:'Pablo Cocola',cond:'A fijar',precio:287,prima:0,gastos:0,merma:0,com:1,par:0,pos:'Hasta 30/11/26',fecha:'29/04/2026',obs:'A fijar: pizarra qq -USD 27. Sin paritaria ni flete salida.'},
    {grano:'Soja',dest:'Quequén',comp:'Pablo Cocola',cond:'A fijar',precio:307,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May 2026',fecha:'08/04/2026',obs:'A fijar pizarra Rosario - USD 7. Hasta 30/06/2026.'},
    // Pedro Perea
    {grano:'Girasol',dest:'Necochea',comp:'Pedro Perea',cond:'Disponible',precio:350,prima:40,gastos:20,merma:0.5,com:1,par:0,pos:'Disponible',fecha:'17/04/2026',obs:'U$S350 + U$S40. Reciben seco.'},
    // Mercado Necochea/Bahía Blanca
    {grano:'Trigo',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:225,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Ene 2027',fecha:'29/04/2026',obs:'Trabajando trigo enero Necochea'},
    {grano:'Trigo',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:225,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Ene 2027',fecha:'29/04/2026',obs:'Trabajando trigo enero BB'},
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:200,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Jun/Jul 2026',fecha:'29/04/2026',obs:'Trabajando maiz Jun/Jul Necochea'},
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Disponible',precio:205,prima:0,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'28/04/2026',obs:'Maiz Necochea Mayo'},
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:190,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Ago 2026',fecha:'21/04/2026',obs:'Precio idea Necochea'},
    {grano:'Maíz',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Disponible',precio:202,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Abr/May 2026',fecha:'21/04/2026',obs:'Precio idea BB'},
    {grano:'Maíz',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:195,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Sept-Feb',fecha:'21/04/2026',obs:'Precio idea BB'},
    {grano:'Soja',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Disponible',precio:313,prima:15,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'28/04/2026',obs:'Soja Necochea idea - x lote c/ descarga'},
    {grano:'Soja',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Disponible',precio:310,prima:0,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'28/04/2026',obs:'Soja BB idea'},
    {grano:'Cebada',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:210,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Dic/Ene 2026/27',fecha:'29/04/2026',obs:'Cebada Forrajera BB y Quequén cosecha 26/27'},
    // Guido García
    {grano:'Trigo',dest:'Quequén',comp:'Guido García',cond:'Disponible',precio:230,prima:0,gastos:20,merma:0,com:3,par:4,pos:'Disponible',fecha:'29/04/2026',obs:'TRIGO ENERO 2026'},
    {grano:'Trigo',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:230,prima:0,gastos:20,merma:0,com:3,par:4,pos:'Ene 2027',fecha:'29/04/2026',obs:''},
    {grano:'Girasol',dest:'Tandil',comp:'Guido García',cond:'Disponible',precio:360,prima:15,gastos:7,merma:0.5,com:3,par:4,pos:'Disponible',fecha:'18/04/2026',obs:'Oleico. Pago 10 días.'},
    {grano:'Girasol',dest:'Quequén',comp:'Guido García',cond:'Disponible',precio:360,prima:30,gastos:20,merma:0.5,com:3,par:4,pos:'Disponible',fecha:'18/04/2026',obs:'QQ. Pago 10 días.'},
    {grano:'Cebada',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:222,prima:0,gastos:20,merma:0,com:3,par:4,pos:'2027',fecha:'14/04/2026',obs:'Idea precio 2027. Rango 220/225 QQ.'},
    {grano:'Maíz',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:180,prima:0,gastos:20,merma:0,com:3,par:4,pos:'2027',fecha:'14/04/2026',obs:'Idea precio 2027.'}
  ]
};