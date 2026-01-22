function carregarUltimosAbastecimentos(){
 if(!podeVer()) return;
 const c=document.getElementById('relatorio-container');
 if(!c) return;

 c.innerHTML=`<div class='card'>
 <h3>⛽ Últimos Abastecimentos</h3>
 <table>
 <thead><tr>
 <th>Data</th><th>Placa</th><th>Secretaria</th><th>Status</th>
 </tr></thead>
 <tbody id='lista'></tbody>
 </table>
 </div>`;

 const body=document.getElementById('lista');
 db.ref('abastecimentos').limitToLast(20).on('value',snap=>{
  body.innerHTML='';
  const arr=[]; snap.forEach(s=>arr.push(s.val())); arr.reverse();
  arr.forEach(a=>{
   body.innerHTML+=`<tr>
    <td>${new Date(a.data).toLocaleDateString()}</td>
    <td>${a.placa||'-'}</td>
    <td>${a.secretaria||'-'}</td>
    <td>${a.status}</td>
   </tr>`;
  });
 });
}
