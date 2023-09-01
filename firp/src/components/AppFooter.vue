<template>
    <footer class = 'footer'>
        <div class="footer__container">
            <div class="footer__header">
                © COPYRIGHT TEXT
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    border-top: 1px solid rgb(73, 73, 73);
    background-color: #000627;
    width: 100%;
    height: 150px;
}
.footer__container {
    width: 700px;
    height: 100%;
    margin: 0px auto;
}
.footer__header {
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: 40px;
    letter-spacing: 0.05em;
    color: #fff;
    font-family: 'Roboto Condensed';
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>