<template>
  <div>
    <div class="mb-3">
      <code>{{ Person }}</code>
    </div>
    <b-row>
      <b-col cols="12" md="4"></b-col>
      <b-col cols="12" md="4" class="pb-4">
        <b-form>
          <b-form-group description="Nombre de la persona a registrar" label="name" label-for="inputName" />
          <b-form-input id="inputjob" v-model="Person.name"></b-form-input>
          <b-form-group description="Apellido de la persona a registar" label="last_name" label-for="inputLast_name" />
          <b-form-input id="inputLast_name" v-model="Person.last_name"></b-form-input>
          <b-form-group description="nombre del trabajo" label="job" label-for="inputJob" />
          <b-form-input id="inputjob" v-model="Person.job"></b-form-input>

          <b-button pill variant="primary" class="mt-3" @click="insertPerson">Save</b-button>
        </b-form>
      </b-col>
      <b-col cols="12" md="4">

      </b-col>
    </b-row>

    <div class="container-fluid">
      <b-row>
        <b-col cols="12" md="4" sm="6" class="my-2" v-for="people in pagination.data" v-bind:key="people.id">
          <b-card :title="people.first_name + ' ' + people.last_name" xs="12">
            <b-avatar :src="people.avatar" size="105px"></b-avatar>
            <b-card-text class="mt-3">{{ people.email }}</b-card-text>
            <b-col cols="12">
              <b-button variant="danger" @click="showAlert(people)">Edit</b-button>
            </b-col>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <!--Modal de Actualizacion de datos-->
    <b-modal v-model="showModal" title="Actualizacion de datos">
      <b-form>
        <b-form-group label="Name" label-for="name" invalid-feedback="Name is required" class="my-2">
          <b-form-input id="name" v-model="Person.name" :value="Person.name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Last name" label-for="lastName" invalid-feedback="LastName is required" class="my-2">
          <b-form-input id="Lastname" v-model="Person.last_name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Job" label-for="ljob" invalid-feedback="Job is required" class="my-2">
          <b-form-input id="jon" v-model="Person.job" required></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>


  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Person } from "./../../entities/person";
import { PeopleController } from './people.controller';
import { AllPeopleDto } from "../../entities/dto/AllPeopleDto";
import { PeopleDto } from '../../entities/dto/PeopleDto';

export default Vue.extend({
  name: 'IndexPersonVue',
  data() {
    return {
      showModal: false,
      selectedPerson: null,
      page: 1 as number,
      pagination: {} as AllPeopleDto,
      Person: {
        name: '',
        last_name: '',
        job: ''
      } as Person
    }
  },
  methods: {
    async getAllPeople() {
      const controller = await new PeopleController();
      const response = await controller.getAllPeople(this.page);


      if (response.status == 200) {
        this.pagination = response.entity!;
      }
    },
    async insertPerson() {
      const controller = new PeopleController();
      const resp = await controller.insertPerson(this.Person)
      console.log(resp.result);

      if (resp.result) {
        this.Person = {
          name: " ",
          last_name: " ",
          job: " "
        } as Person

        this.$swal({
          title: 'Persona registrada!!',
          text: `la persona ${resp.entity!.name} fue registrada de manera correcta en nuyestro sistema con el ID ${resp.entity!.id}!!`,
          icon: 'success',
        });
      } else {
        this.$swal({
          title: 'Error al realizar el registro',
          text: `La persona ${resp.entity!.name} no se pudo registrar en el sistema, intentalo nuevamente mas tarde`,
          icon: 'error'
        });
      }
    },
    showAlert(people: PeopleDto) {
      this.showModal = true;
      console.log('117 ->', people.first_name, people.id);
      this.Person = {
        name: people.first_name,
        last_name: people.last_name,
        job: people.email
      }
    },
  async updatePerson() {
        if (this.Person.name.length === 0) {
          
        }
        if (this.Person.last_name.length === 0) {
          
        }
        if (this.Person.job.length === 0) {
          
        }
        const controller = new PeopleController();
        const resp = await controller.updatePerson(this.Person)
        
      }
  },
  mounted() {
    this.getAllPeople();
  }
})
</script>

<style></style>