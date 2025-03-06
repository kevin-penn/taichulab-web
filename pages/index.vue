<style>
.carousel {
    width: 100%;
}
.carousel-item img{
    opacity: 1;
    object-fit:cover;
}
</style>
<template>
    <div class="flex-grow flex h-full justify-center items-center">
        <Carousel control indicators>
            <CarouselInner>
                <CarouselItem>
                    <CarouselItemImage
                        src="/imgs/carousel1.jpeg" />
                    <CarouselCaption>
                        <h4>点燃内心的黎明 觉悟</h4>
                        <p>谈论无法证实的事只会徒增人的贪欲染著，无益于解决人的痛苦 - 十四无记。</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <CarouselItemImage
                        src="/imgs/carousel2.jpeg" />
                    <CarouselCaption>
                        <h4>点燃内心的黎明 心</h4>
                        <p>我们认为世界怎么样，世界就呈现出我们所想的样子。</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <CarouselItemImage
                        src="/imgs/carousel2.jpeg" />
                    <CarouselCaption>
                        <h4>点燃内心的黎明 佛</h4>
                        <p>众生、修心、成佛，是凡夫变成佛的次第过程。</p>
                    </CarouselCaption>
                </CarouselItem>
            </CarouselInner>
        </Carousel>

    </div>
</template>