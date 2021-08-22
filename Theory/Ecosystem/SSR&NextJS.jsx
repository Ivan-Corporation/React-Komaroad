// Server Side Rendering

// Так как исходный HTML, предоставляемый сервером (для всех страниц) не содержит HTML, 
// специфичный для конкретного применения, поисковый движок видит веб-сайт как пустой, 
// не имеющий никакого содержимого.
// Таким образом, ваш сайт может не попасть в топ поисковых результатов,
// несмотря на огромный трафик и релевантное содержание.

// Единственный способ исправить это - генерировать HTML на сервере для данной страницы,
// но только при первой загрузке.

// Этот метод имеет еще одно дополнительное преимущество. Так как сервер будет возвращать правильный HTML для страницы, 
// пользователь больше не будет видеть пустой экран, пока все ресурсы приложения не будут загружены.

//* Такой процесс рендеринга HTML на стороне сервера называется server-side rendering или SSR.

//? По моему мнению такой способ только усложняет разработку в современных реалиях, когда уже даже телефоны справляются с
//? с рендером сайта прямо на ваших устройствах, таким способом можно лишь усложнить разработку
//! Если вы бизнес и хотите заказать сайт, а вам предлагают SSR, задумайтесь может вас разводят на деньги,
//! усложняя разработку и поддержку на ровном месте, прямо как бабушек с переустановкой Windows. 
//* (Next.js может стать приемлимым вариантом, но только при больших планах на дальнейшее SEO)
//* 

// Если же такой вариант подходит намного больше чем рендер на странице, то на такой счёт уже существует Next.js фреймворк
// поверх React, с ним разработка становится легче и его мы рассмотрим

//* npx create-next-app koma-next --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"


// Можете кста ознакомится с моим Next.JS приложением где происходит работа с API
// https://github.com/Ivan-Corporation/React-Next.js_API-auth