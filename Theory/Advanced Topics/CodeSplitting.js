// Если кратко то Code Splitting это разделение кода. Всё)
// Шучу блин) Code Splitting используется для оптимизации вашего сайта или приложения, увеличивая производительность
// сайта уже в виде Бандла
// например:
// Динамический импорт
import("./translate").then(translate => {
    console.log(translate.text("Gehirn", "brechen"));
});
// т.е. мы просто соединяем импорт с функцией компонента, это позволяет реакту сразу рендерить все вместе +оптимизация

// Другой пример:
const module = await import('/modules/myCustomModule.js');
// Здесь мы разделяем chunck на несколько более мелких частей, сбтн. code splitting...
// Далее картинка которую я не украл, а одолжил отсюда - https://blog.logrocket.com/wp-content/uploads/2020/10/u7TMq3gZ-e1603726308465.png
// <img src='./chunks.jpg' />





///////////////////////////////////////////////////////////////////
// React.lazy 
// Автоматически загрузит бандл, содержащий OtherComponent, когда этот компонент будет впервые отрендерен.
// Если более коротко, то позволяет вешать экраны загрузки и прочие вещи, не позволяя компоненту из импорта
// загрузится раньше времени:
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <section>
                    <OtherComponent />
                    <AnotherComponent />
                </section>
            </Suspense>
        </div>
    );
}
// ЕСТЬ И ДРУГИЕ ПУТИ СОЗДАНИЯ ЗАГЛУШКИ
// Не нужно делать при создании маленьких приложений