    <template lang="html">
        <div class="profile__settings">
            <div class="profile__settings__container">
                <form action="" class="profile__settings__grid">
                    <my-input v-model ="userInformation.name" ref="nameInput" type="text" class="profile__settings__name" placeholder="Enter your name" />
                    <my-input v-model ="userInformation.email" ref="emailInput" type="email" class="profile__settings__email" placeholder="Enter your email" />
                    <my-input v-model ="userInformation.age" ref="ageInput" type="number" class="profile__settings__age" placeholder="Enter your age" />
                    <my-input v-model ="userInformation.lang" ref="langInput" type="text" class="profile__settings__lang" placeholder="Enter languages you know" />
                    <my-input v-model ="userInformation.birth" ref="birthInput" type="text" class="profile__settings__birth-day" placeholder="Enter your birth data" />
                    <my-input v-model ="userInformation.description" ref="descriptionInput" class="profile__settings__description" placeholder="Tell something about yourself" />
                    <button class="button first__upload__btn">Upload a photo</button>
                    <button class="button second__upload__btn">Upload a photo</button>
                    <button @click.prevent="saveData" class="button button-save">Save</button>
                    <button class="button button-reset">Reset</button>
                </form>
            </div>
        </div>
    </template>
<script setup>
import MyInput from '../UI/MyInput.vue';
import { useAccountStore } from '@/stores/accountStore';
import { computed } from 'vue';
import {ref} from 'vue'

const nameInput = ref('Not stated');
const emailInput = ref('Not stated+');
const ageInput = ref(0);
const langInput = ref('Not stated+');
const birthInput = ref('Not stated+');
const descriptionInput = ref('Not stated+');

const accountStore = useAccountStore()
const userInformation = accountStore.userInformation
const saveData = () => {
    console.log("Функция сработала");
    
    const currentUserInformation = {
        name: nameInput.value?.$el.value || 'Not stated',
        email: emailInput.value?.$el.value || 'Not stated',
        age: parseInt(ageInput.value?.$el.value) || 0,
        lang: langInput.value?.$el.value || 'Not stated',
        birth: birthInput.value?.$el.value || 'Not stated',
        description: descriptionInput.value?.$el.value || 'Not stated',
    }
    accountStore.setInformationAboudUser(currentUserInformation);
}
</script>
<style scoped>
input{width: 100%;height: 100%;}
.profile__settings{
    width: 100%;
    height: 100%;
}
.profile__settings__container{
    width: 100%;
    height: 100%;
    padding: 20px;
}

.profile__settings__grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "name name email email"
    "age lang lang birthDay"
    "description description description description"
    "buttonT1 buttonT2 buttonT3 buttonT4";
    gap: 50px; 
}

/* Расположение элементов по сетке */
.profile__settings__name {
    grid-area: name;      
}

.profile__settings__email {
    grid-area: email;      
}

.profile__settings__age {
    grid-area: age;    
}  

.profile__settings__lang {
    grid-area: lang;      
}

.profile__settings__birth-day {
    grid-area: birthDay;      
}

.profile__settings__description {
    grid-area: description;      
}

.upload-btn {
    background-color: #535252;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    border: none;
}

.button-save {
    background-color: #4caf50;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

.button-reset {
    background-color: #e74c3c;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

.first__upload__btn {
    grid-area: buttonT1;      
}

.second__upload__btn {
    grid-area: buttonT2;     
}

.button-save {
    grid-area: buttonT3;     
}

.button-reset {
    grid-area: buttonT4; 
}

</style>