// TRACKER DE GRANOS — datos actualizados al 21/04/2026
window.TRACKER_DATA = {
  fecha: '21/04/2026',
  pizarra: { Trigo:210, 'Maíz':200, Girasol:360, Soja:314, Cebada:205 },
  matba:   { Trigo:191.6, 'Maíz':190, Girasol:0, Soja:324.3, Cebada:215 },
  negocios: [
    // Pablo Cocola
    {grano:'Trigo',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:217,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Disponible',fecha:'21/04/2026',obs:''},
    {grano:'Cebada',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:210,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Abr/May 2026',fecha:'21/04/2026',obs:'Cebada forr QQ'},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:205,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Disponible hasta 30/04',fecha:'21/04/2026',obs:''},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:200,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May 2026',fecha:'21/04/2026',obs:''},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:195,prima:0,gastos:20,merma:0,com:1,par:0,pos:'20/5 al 20/6',fecha:'21/04/2026',obs:''},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:190,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Jul/Ago 2026',fecha:'21/04/2026',obs:''},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:360,prima:20,gastos:7,merma:0.5,com:1,par:0,pos:'Abr/May',fecha:'17/04/2026',obs:'Común. Sin flete salida ni paritaria'},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Fija a término',precio:360,prima:40,gastos:7,merma:0.5,com:1,par:0,pos:'Jun/Jul',fecha:'17/04/2026',obs:'Común Jun/Jul'},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:360,prima:30,gastos:7,merma:0.5,com:1,par:0,pos:'Disponible',fecha:'17/04/2026',obs:'Oleico'},
    {grano:'Maíz',dest:'Tandil',comp:'Pablo Cocola',cond:'Fija a término',precio:162,prima:0,gastos:0,merma:0.5,com:1,par:0,pos:'Jul/Ago 2026',fecha:'17/04/2026',obs:'Puesto en Tandil. 2 pts libres + USD 4/pto. Sin paritaria ni flete salida. Pago 10 días.'},
    {grano:'Soja',dest:'Quequén',comp:'Pablo Cocola',cond:'A fijar',precio:307,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May 2026',fecha:'08/04/2026',obs:'A fijar pizarra Rosario - USD 7. Hasta 30/06/2026.'},
    // Pedro Perea
    {grano:'Girasol',dest:'Necochea',comp:'Pedro Perea',cond:'Disponible',precio:350,prima:40,gastos:20,merma:0.5,com:1,par:0,pos:'Disponible',fecha:'17/04/2026',obs:'U$S350 + U$S40. Reciben seco.'},
    // Mercado Necochea/Bahía Blanca
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Disponible',precio:200,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Abr 2026',fecha:'21/04/2026',obs:'Precio idea'},
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:195,prima:0,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'21/04/2026',obs:'Precio idea'},
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:190,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Jun/Jul/Ago 2026',fecha:'21/04/2026',obs:'Precio idea Necochea'},
    {grano:'Maíz',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Disponible',precio:202,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Abr/May 2026',fecha:'21/04/2026',obs:'Precio idea BB'},
    {grano:'Maíz',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:195,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Sept-Feb',fecha:'21/04/2026',obs:'Precio idea BB'},
    {grano:'Soja',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Disponible',precio:315,prima:0,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'21/04/2026',obs:'Soja Mayo Necochea'},
    // Guido García
    {grano:'Girasol',dest:'Tandil',comp:'Guido García',cond:'Disponible',precio:360,prima:15,gastos:7,merma:0.5,com:3,par:4,pos:'Disponible',fecha:'18/04/2026',obs:'Oleico. Pago 10 días.'},
    {grano:'Girasol',dest:'Quequén',comp:'Guido García',cond:'Disponible',precio:360,prima:30,gastos:20,merma:0.5,com:3,par:4,pos:'Disponible',fecha:'18/04/2026',obs:'QQ. Pago 10 días.'},
    {grano:'Trigo',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:220,prima:0,gastos:20,merma:0,com:3,par:4,pos:'Ene 2027',fecha:'14/04/2026',obs:''},
    {grano:'Cebada',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:222,prima:0,gastos:20,merma:0,com:3,par:4,pos:'2027',fecha:'14/04/2026',obs:'Idea precio 2027. Rango 220/225 QQ.'},
    {grano:'Maíz',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:180,prima:0,gastos:20,merma:0,com:3,par:4,pos:'2027',fecha:'14/04/2026',obs:'Idea precio 2027.'}
  ]
};