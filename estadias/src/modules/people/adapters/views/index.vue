<template>
  <div>
    <div class="mb-3">
      <code>{{Person}}</code>
    </div>
  <b-row>
  <b-col cols="12" md="4" ></b-col>
    <b-col cols="12" md="4" class="pb-4" >
      <b-form>
        <b-form-group
        description="Nombre de la persona a registrar"
        label="name"
        label-for="inputName"
        />
          <b-form-input id="inputjob" v-model="Person.name"></b-form-input> 
        <b-form-group
        description="Apellido de la persona a registar"
        label="last_name"
        label-for="inputLast_name"
        /> 
          <b-form-input id="inputLast_name" v-model="Person.last_name"></b-form-input>     
        <b-form-group
        description="nombre del trabajo"
        label="job"
        label-for="inputJob"
        />
          <b-form-input id="inputjob" v-model="Person.job"></b-form-input>
          
          <b-button pill variant="primary" class="mt-3" @click="insertPerson" >Save</b-button>  
      </b-form>
    </b-col>
    <b-col cols="12" md="4">

    </b-col>
  </b-row>

  <div class="container-fluid">
    <b-row>
      <b-col cols="12" md="4" sm="6" class="my-2" v-for="people in pagination.data" v-bind:key="people.id">
      <b-card
      :title="people.first_name+' '+people.last_name" 
      xs="12"
      >
      <b-avatar :src="people.avatar" size="105px"></b-avatar>
      <b-card-text class="mt-3">{{people.email}}</b-card-text>
        <b-col cols="12">
          <b-button variant="danger" @click="showAlert">♥</b-button>
        </b-col>
      </b-card>
      </b-col>
   </b-row> 
  </div> 
    
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Person} from "./../../entities/person";
import { PeopleController } from "./people.controller";
import {AllPeopleDto  } from "../../entities/AllPeopleDto";

export default Vue.extend({
    name:'IndexPersonVue',
    data(){
        return {
           page:1 as number,
           pagination: {} as AllPeopleDto,
            Person:{
              name:'',
              last_name:'',
              job:''
            } as Person
        }
    },
    methods:{
      async getAllPeople(){
        const controller = await new PeopleController();
        const response = await controller.getAllPeople(this.page);
        
        
        if(response.status ==200){
          this.pagination=response.entity!;
        }
      },
      async insertPerson(){
        const controller = new PeopleController();
        const resp= await controller.insertPerson(this.Person)
        console.log(resp.result);
        
        if(resp.result){
          this.Person={
            name:" ",
            last_name:" ",
            job:" "
          } as Person

          this.$swal({
            title:'Persona registrada!!',
            text:`la persona ${resp.entity!.name} fue registrada de manera correcta en nuyestro sistema con el ID ${resp.entity!.id}!!`,
            icon:'success',
          });
        }else{
          this.$swal({
            title:'Error al realizar el registro',
            text:`La persona ${resp.entity!.name} no se pudo registrar en el sistema, intentalo nuevamente mas tarde`,
            icon:'error'
          });
        }
      },
      showAlert(){
        this.$swal({
          title:'En esta patalla haremos la modificacion de datos',
          text:'Aqui haremos el update, pero aun no se como jeje :3'
        });
      },

    },
    mounted(){
      this.getAllPeople();
    }
})
</script>

<style></style>