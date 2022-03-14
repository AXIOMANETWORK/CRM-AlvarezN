import React from 'react'

const Home = () => {
  return (
          <div class="container">
          <div class="card1 card-color card-flex">
              <div class="icon"><i class="fa-solid fa-circle-user"></i></div>
              <div class="text-icon">
                  <h3>36</h3>
                  <h5>Clientes activos</h5>
              </div>
          </div>
          <div class="card2 card-color card-flex">
              <div class="icon"><i class="fa-solid fa-briefcase"></i></div>
              <div class="text-icon">
                  <h3>25</h3>
                  <h5>Casos atendidos</h5>
              </div>
          </div>
          <div class="card3 card-color card-flex">
              <div class="icon"><i class="fa-solid fa-address-book"></i></div>
              <div class="text-icon">
                  <h3>86%</h3>
                  <h5>Eficacia de respuesta</h5>
              </div>
          </div>
          <div class="card4 card-color card-flex">
              <div class="icon"><i class="fa-solid fa-calendar"></i></div>
              <div class="text-icon">
                  <h3>98%</h3>
                  <h5>New Leads</h5>
              </div>
          </div>
          <div class="card5 card-color">
              <canvas id="MiGrafica2" width="50" height="50"></canvas>
              
          </div>
          <div class="card6 card-color" >
              <canvas id="MiGrafica" width="50" height="50"></canvas>
          </div>
          <div class="card7 card-color">
              <div class="table">
                  <h4>Ultimas sesiones</h4>
                  <table>
                      <thead>
                          <tr>
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Ultima Sesion</th>
                              <th>Role</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Javier</td>
                              <td>Lopéz</td>
                              <td>18/02/2022 - 18:45:00</td>
                              <td class="role">Cliente</td>
                          </tr>
                          <tr>
                              <td>Maribel</td>
                              <td>Velasco</td>
                              <td>03/01/2022 - 11:02:00</td>
                              <td>Abogado</td>
                          </tr>
                          <tr>
                              <td>Jorge</td>
                              <td>Hernandez</td>
                              <td>10/02/2022 - 13:23:00</td>
                              <td>Abogado</td>
                          </tr>
                          <tr>
                              <td>Norma</td>
                              <td>Ayala</td>
                              <td>18/02/2022 - 22:16:00</td>
                              <td>Cliente</td>
                          </tr>
                          <tr>
                              <td>Alex</td>
                              <td>Pacheco</td>
                              <td>18/02/2022 - 22:16:00</td>
                              <td>Admin</td>
                          </tr>
                          <tr>
                              <td>Daniela</td>
                              <td>Alcantara</td>
                              <td>18/02/2022 - 22:16:00</td>
                              <td>Cliente</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="card8 card-color">
              <div class="table">
                  <h4>Casos activos</h4>
                  <table>
                      <thead>
                          <tr>
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Observacion</th>
                              <th>Estatus</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Ramiro</td>
                              <td>Pérez</td>
                              <td>Informe completo</td>
                              <td ><a href=""><p class="status-ok">cerrado</p></a> </td>
                          </tr>
                          <tr>
                              <td>Jose</td>
                              <td>Fernandez</td>
                              <td>En espera de Poderes</td>
                              <td ><a href=""> <p class="status-pending">Pendiente</p></a></td>
                          </tr>
                          <tr>
                              <td>Angelica</td>
                              <td>Gutierrez</td>
                              <td>Falta firma de contrato</td>
                              <td ><p class="status-pending"> <a href="">Pendiente</a> </p></td>
                          </tr>
                          <tr>
                              <td>Valeria</td>
                              <td>Ortiz</td>
                              <td>Ya se envio el oficio</td>
                              <td> <p class="status-ok"><a href="">Cerrado</a></p></td>
                          </tr>
                          <tr>
                              <td>Cristian</td>
                              <td>Tapia</td>
                              <td>Esperando resolucion de certificado</td>
                              <td><p class="status-pending"><a href=""> Pendiente</a></p></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>


      </div>
  )
}

export default Home