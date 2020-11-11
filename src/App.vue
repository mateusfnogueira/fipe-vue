<template>
  <v-app>
    <v-app-bar app color=" #FFFFFF">
      <h1>Navita</h1>
    </v-app-bar>

    <v-main>
      <div class="veiculos mt-8 ml-4">
        <h1>Veículos</h1>
        <v-row align="center" class="flex-column ma-4" no-gutters>
          <v-card width="90%" class="carros mb-10">
            <v-app-bar color=" #F8F9FC">
              <h2>Marcas</h2>
            </v-app-bar>
            <v-simple-table fixed-header height="300px" :key="carro.codigo">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Marca
                    </th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="carro in cars" :key="carro.nome">
                    <td>{{ carro.nome }}</td>
                    <td>
                      <v-btn
                        color="#4E73DF"
                        text
                        @click="loadModels(carro.codigo)"
                        >Ver Modelos</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>

          <v-card v-if="models.length > 0" width="90%" class="modelos mt-10">
            <v-app-bar color=" #F8F9FC">
              <h2>Modelos</h2>
            </v-app-bar>
            <v-simple-table fixed-header height="300px" :key="modelo.codigo">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Modelo
                    </th>
                    <th class="text-left">
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="modelo in models" :key="modelo.codigo">
                    <td>{{ modelo.nome }}</td>
                    <td>{{ modelo.codigo }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-row>
      </div>
    </v-main>

    <footer>
      <v-row align="center" justify="center" no-gutters>
        <p>Copyright &copy; Navita 2020</p>
      </v-row>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    cars: [],
    models: [],
    carro: {
      nome: '',
      codigo: ''
    },
    modelo: {
      nome: '',
      codigo: ''
    }
  }),

  created() {
    this.loadCars()
  },

  methods: {
    loadCars() {
      this.$http.get('marcas').then((res) => {
        this.cars = res.data
      })
    },

    loadModels(id) {
      this.$http.get(`marcas/${id}/modelos`).then((res) => {
        this.models = res.data.modelos
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  header {
    box-shadow: 0px 2px 4px -1px rgba(58, 59, 69, 0.15),
      0px 4px 5px 0px rgba(58, 59, 69, 0.15),
      0px 1px 10px 0px rgba(58, 59, 69, 0.15) !important;
    h1 {
      color: #1cc88a;
    }
  }
  .v-main {
    background-color: #f7f8fb;
    .veiculos {
      h1 {
        color: #5a5c69;
      }
      .row {
        .v-card {
          border-color: #e3e6f0;
          .v-app-bar {
            box-shadow: 0px 2px 4px -1px rgba(58, 59, 69, 0.15),
              0px 4px 5px 0px rgba(58, 59, 69, 0.15),
              0px 1px 10px 0px rgba(58, 59, 69, 0.15) !important;
            h2 {
              color: blue;
            }
          }
          .v-data-table {
            table {
              thead {
                tr {
                  th {
                    color: #5a5c69;
                  }
                }
              }
              tbody {
                tr {
                  td {
                    color: #5a5c69;
                    .v-btn {
                      text-transform: none;
                      :hover {
                        color: #1cc88a;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  footer {
    background-color: #FFFFFF;
    .row {
      height: 50px;
      p {
        font-size: 12px;
        color: #5A5C69;
        margin: 0;
      }
    }
  }
}
</style>
