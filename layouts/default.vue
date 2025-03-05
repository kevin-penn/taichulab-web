<style>
    .el-menu--horizontal {
        --el-menu-bg-color: none;
        --el-menu-text-color: white;
        --el-menu-active-color: #00ffee;
        --el-menu-hover-bg-color: none;
        border: 0!important;
    }
</style>
<template>
    <div class="">
        <nav class="bg-gray-900 p-4 flex justify-center items-center">
            <div class="w-full max-w-7xl">
                <el-menu mode="horizontal" default-active="0" ellipsis="false" class="flex items-center border-0">
                    <img src="/imgs/logo.png" class="h-10 bg-black mr-24" />
                    <el-menu-item index="0">首页</el-menu-item>
                    <el-menu-item index="1">研究方向</el-menu-item>
                    <el-menu-item index="2">解决方案</el-menu-item>
                    <el-menu-item index="3">科技共创</el-menu-item>
                    <el-menu-item index="4">本地实验</el-menu-item>
                </el-menu>
            </div>
        </nav>
        <main class="mx-auto w-full max-w-7xl">
            <slot />
        </main>
    </div>
</template>