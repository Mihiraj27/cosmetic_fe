<template>
    <aside :class="`${is_expanded && 'is_expanded'}`">
        <div class="logo">
            <img src="../assets/logo.png" alt="Vue">
        </div>
        <div class="menu-toggle-wrap" @click="ToggleMenu">
            <button class="menu-toggle">
                <span class="material-icons">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
        <h6>Menu</h6>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <spam class="text">Home</spam>
            </router-link>
            <router-link class="button" to="/about-us">
                <span class="material-icons">info</span>
                <spam class="text">About Us</spam>
            </router-link>
            <router-link class="button" to="/AboutUs">
                <span class="material-icons">settings</span>
                <spam class="text">Team</spam>
            </router-link>
            <router-link class="button" to="/">
                <span class="material-icons">email</span>
                <spam class="text">Email</spam>
            </router-link>
        </div>
        <div class="flex"> 
        </div>
        <div class="menu">
                <router-link class="button" to="/SignIn">
                    <span class="material-icons">logout</span>
                    <spam class="text">Log Out</spam>
                </router-link>
        </div>
    </aside>
</template>

<script setup>

import { ref } from 'vue';



const is_expanded = ref(localStorage.getItem(("is_expanded") === "true"))

const ToggleMenu = () =>{
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value);

    console.log("d RRR"+is_expanded.value)
}


</script>

<style lang="scss" scoped>
aside{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
    padding: 0.5rem;

    background-color: var(--dark);
    color: var(--light);
   // width: var(--sidebar--width);
   width: calc(3rem + 32px);

    transition: 0.2s ease-in-out;

    .h3{
        font-size: 0.25rem;
    }

    .logo{
        margin-bottom: 1rem;

        img{
            width: 2rem;
        }
    }

    .flex{
        flex: 1 1 0;
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 1;
        transition: 0.2s ease-out;

        .menu-toggle{
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover{
                .material-icons{
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

   

    &.is_expanded {
        width: var(--sidebar--width);

        .menu-toggle-wrap{
            top: -3rem;
            
            .menu-toggle{
                transform: rotate(-180dg);
            }
        }

        h3,.button .text{
            opacity: 1;
        }

        h3{
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            color: var(--grey);
        }

        .button{
            .material-icons{
                margin-right: 1rem;
            }
        }



    }

    .menu{
        margin : 0 --1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 0.5rem;
            transition: 0.2s ease-out;

            .material-icons{
                font-size: 2rem;
                color: var(--light);
                margin-right: 2rem;
                transition: 0.2s ease-out;
            }

            .text{
                color: var(--light);
                transition: 0.25s ease-in-out;
            }

            &:hover , &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-icons , .text{
                    color: var(--primary);
                }
                
            }

            &.router-link-exact-active {
                border-right: 2px solid var(--primary);
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>