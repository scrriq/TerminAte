import { defineStore } from "pinia";
import axiosApiInstance from "@/api";
import { useAuthStore } from "./auth";

export const usePostsStore = defineStore('posts',
    {
        state: () => ({
            posts: [],
            userId: "", 
        }), 
        actions:{
            async fetchPost(){
                try{
                    const response = await axiosApiInstance.get(`https://enlino-default-rtdb.europe-west1.firebasedatabase.app/users/${this.userId}.json?`);
                    this.posts = Object.values(response.data || {}); 
                }catch(err){
                    console.log(err);      
                }
            }, 
            async createPost(post){
                try{
                    await axiosApiInstance.put(`https://enlino-default-rtdb.europe-west1.firebasedatabase.app/users/${this.userId}/${post.id}.json?`, post);
                    await this.fetchPost(); 
                }catch(err){
                    console.log(err);
                }
            }, 
            async removePost(postId){
                try{
                    await axiosApiInstance.delete(`https://enlino-default-rtdb.europe-west1.firebasedatabase.app/users/${this.userId}/${postId}.json`);
                    await this.fetchPost();
                }catch(err){
                    console.log(err);
                }
            }
        }
    }
)