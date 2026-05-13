// TRACKER DE GRANOS — datos actualizados al 13/05/2026
window.TRACKER_DATA = {
  fecha: '13/05/2026',
  pizarra: { Trigo:210, 'Maíz':200, Girasol:360, Soja:314, Cebada:205 },
  matba:   { Trigo:191.6, 'Maíz':190, Girasol:0, Soja:324.3, Cebada:215 },
  negocios: [

    // Pablo Cocola - Trigo
    {grano:'Trigo',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:235,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Dic/Ene 2026/27',fecha:'12/05/2026',obs:'Trigo qq dic/ene'},
    {grano:'Trigo',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:225,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Jul 2026',fecha:'12/05/2026',obs:'Trigo julio qq'},
    {grano:'Trigo',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:215,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May/Jun 2026',fecha:'11/05/2026',obs:'Trigo qq mayo/junio'},

    // Pablo Cocola - Maiz
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:195,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Jul/Ago 2026',fecha:'12/05/2026',obs:''},
    {grano:'Maíz',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:200,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Oct 2026',fecha:'08/05/2026',obs:''},
    {grano:'Maíz',dest:'Tandil',comp:'Pablo Cocola',cond:'Fija a término',precio:162,prima:0,gastos:0,merma:0.5,com:1,par:0,pos:'Jul/Ago 2026',fecha:'17/04/2026',obs:'Puesto en Tandil. 2 pts libres + USD 4/pto. Sin paritaria ni flete salida. Pago 10 dias.'},

    // Pablo Cocola - Girasol
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:380,prima:10,gastos:7,merma:0.5,com:1,par:0,pos:'Disponible',fecha:'11/05/2026',obs:'Comun Tandil/San Manuel. Sin flete salida ni paritaria.'},
    {grano:'Girasol',dest:'Tandil',comp:'Pablo Cocola',cond:'Fija a término',precio:360,prima:40,gastos:7,merma:0.5,com:1,par:0,pos:'Jun/Jul',fecha:'17/04/2026',obs:'Comun Jun/Jul'},
    {grano:'Girasol',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:380,prima:40,gastos:20,merma:0.5,com:1,par:0,pos:'Disponible Oleico',fecha:'12/05/2026',obs:'Oleico Necochea/QQ entrega contractual'},

    // Pablo Cocola - Soja
    {grano:'Soja',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:325,prima:0,gastos:20,merma:0,com:1,par:0,pos:'May 2026',fecha:'12/05/2026',obs:'Soja dispo qq'},
    {grano:'Soja',dest:'Quequén',comp:'Pablo Cocola',cond:'Disponible',precio:330,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Jul 2026',fecha:'12/05/2026',obs:'Soja entrega julio qq'},
    {grano:'Soja',dest:'Tandil',comp:'Pablo Cocola',cond:'A fijar',precio:287,prima:0,gastos:0,merma:0,com:1,par:0,pos:'Hasta 30/11/26',fecha:'12/05/2026',obs:'A fijar: pizarra qq -USD 26. Sin paritaria ni flete salida.'},
    {grano:'Soja',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:285,prima:0,gastos:0,merma:0.5,com:1,par:0,pos:'May 2026 Tandil',fecha:'12/05/2026',obs:'Soja Tandil Mayo. MV 0.5%, camara, 1 pto libre secada.'},
    {grano:'Soja',dest:'Tandil',comp:'Pablo Cocola',cond:'Disponible',precio:288,prima:0,gastos:0,merma:0.5,com:1,par:0,pos:'May 2026 San Manuel',fecha:'12/05/2026',obs:'Soja San Manuel Mayo. MV 0.5%, camara, 1 pto libre secada.'},

    // Pablo Cocola - Cebada
    {grano:'Cebada',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:210,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Dic 2026',fecha:'11/05/2026',obs:'Ceb forr qq Diciembre'},
    {grano:'Cebada',dest:'Quequén',comp:'Pablo Cocola',cond:'Fija a término',precio:212,prima:0,gastos:20,merma:0,com:1,par:0,pos:'Ene/Feb 2027',fecha:'11/05/2026',obs:'Ceb forr qq Enero/Febrero'},

    // Pedro Perea
    {grano:'Girasol',dest:'Necochea',comp:'Pedro Perea',cond:'Disponible',precio:350,prima:40,gastos:20,merma:0.5,com:1,par:0,pos:'Disponible',fecha:'17/04/2026',obs:'USD350 + USD40. Reciben seco.'},

    // Mercado Necochea/BB - Trigo
    {grano:'Trigo',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:235,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Ene 2027',fecha:'12/05/2026',obs:'Trabajando trigo enero Necochea'},
    {grano:'Trigo',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:230,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Ene 2027',fecha:'12/05/2026',obs:'Trabajando trigo enero BB'},
    {grano:'Trigo',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:230,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Jul/Ago 2026',fecha:'12/05/2026',obs:'Trigo Julio/Agosto BB'},

    // Mercado Necochea/BB - Maiz
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:193,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Jul/Ago 2026',fecha:'11/05/2026',obs:'Maiz Necochea julio y agosto'},
    {grano:'Maíz',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Disponible',precio:195,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Jul 2026',fecha:'12/05/2026',obs:'Maiz Julio BB'},
    {grano:'Maíz',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Disponible',precio:200,prima:0,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'28/04/2026',obs:'Maiz Necochea Mayo'},

    // Mercado Necochea/BB - Soja
    {grano:'Soja',dest:'Necochea',comp:'Mercado Necochea/BB',cond:'Disponible',precio:325,prima:0,gastos:20,merma:0,com:0,par:0,pos:'May 2026',fecha:'13/05/2026',obs:'Soja Mayo Necochea/BB'},

    // Mercado Necochea/BB - Cebada
    {grano:'Cebada',dest:'Bahía Blanca',comp:'Mercado Necochea/BB',cond:'Fija a término',precio:210,prima:0,gastos:20,merma:0,com:0,par:0,pos:'Dic/Ene 2026/27',fecha:'29/04/2026',obs:'Cebada Forrajera BB y Quequen cosecha 26/27'},

    // Guido García
    {grano:'Trigo',dest:'Quequén',comp:'Guido García',cond:'Disponible',precio:230,prima:0,gastos:20,merma:0,com:3,par:4,pos:'Disponible',fecha:'29/04/2026',obs:'TRIGO ENERO 2026'},
    {grano:'Trigo',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:230,prima:0,gastos:20,merma:0,com:3,par:4,pos:'Ene 2027',fecha:'04/05/2026',obs:'Trigo 230 usd ene 2027'},
    {grano:'Girasol',dest:'Tandil',comp:'Guido García',cond:'Disponible',precio:360,prima:15,gastos:7,merma:0.5,com:3,par:4,pos:'Disponible',fecha:'18/04/2026',obs:'Oleico. Pago 10 dias.'},
    {grano:'Girasol',dest:'Quequén',comp:'Guido García',cond:'Disponible',precio:360,prima:30,gastos:20,merma:0.5,com:3,par:4,pos:'Disponible',fecha:'18/04/2026',obs:'QQ. Pago 10 dias.'},
    {grano:'Cebada',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:235,prima:0,gastos:20,merma:0,com:3,par:4,pos:'Ene 2027',fecha:'05/05/2026',obs:'235 usd montoya andreia malkia enero27'},
    {grano:'Maíz',dest:'Quequén',comp:'Guido García',cond:'Fija a término',precio:180,prima:0,gastos:20,merma:0,com:3,par:4,pos:'2027',fecha:'14/04/2026',obs:'Idea precio 2027.'}
  ]
};
