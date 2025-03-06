<style>
@import "tailwindcss";
</style>
<template>
    <div>
        <Navbar expand="lg" background-color="body-tertiary" theme="dark" class="w-full px-0">
            <Container>
                <NavbarBrand>
                    <b-img src="/imgs/logo.png" class="h-8" />
                </NavbarBrand>
                <NavbarToggler />
                <NavbarCollapse>
                    <NavbarNavList>
                        <NavItem>
                            <NavLink to="/">
                                首页
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/research">研究方向</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/solutions">
                                解决方案
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/tech-innovation">
                                科技共创
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/social-experiment">
                                社会实验
                            </NavLink>
                        </NavItem>
                    </NavbarNavList>
                </NavbarCollapse>
            </Container>
        </Navbar>
        <Container class="mx-auto p-0">
            <slot />
        </Container>
    </div>
</template>