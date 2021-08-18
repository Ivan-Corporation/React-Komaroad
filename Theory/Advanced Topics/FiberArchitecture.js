// React Fiber - это продолжающаяся повторная реализация основного алгоритма React.

// Цель Fiber в увеличении производительности при разработке таких задач как анимация,
// организация элементов на странице и движение элементов. Ее главная особенность это инкрементный рендеринг: 
// способность разделять работу рендера на единицы и распределять их между множественными фреймами.

// Основное различие между react и react fiber заключается в этих новых функциях:

//* Инкрементный рендеринг:
// React v16.0 включает в себя полностью переписанный серверный рендерер.
// Это очень быстро. Он поддерживает потоковую передачу, поэтому вы можете начать отправлять байты клиенту быстрее

//* Обработка ошибок в рендере API: 
// Чтобы сделать компонент класса границей ошибки,
// мы определяем новый метод жизненного цикла под названием componentDidCatch(error, info).

//* Возврат нескольких элементов из рендеринга: 
// С помощью этой новой функции в React v16.0
// теперь мы также можем возвращать массив элементов и строку из метода рендеринга компонента.

//* Порталы:
// Порталы предоставляют первоклассный способ визуализации дочерних элементов в узле DOM,
// который существует вне иерархии DOM родительского компонента.

//* Фрагменты: 
// Общий шаблон в React заключается в том, что компонент возвращает несколько элементов.
// Фрагменты позволяют сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.


// Этапы:
// Render / Reconciliation phase
// Commit phase

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


//! Как в коде самого реакта определяется Fiber

export type Fiber = {
    // Tag identifying the type of fiber.
    tag: TypeOfWork,

    // Unique identifier of this child.
    key: null | string,

    // The value of element.type which is used to preserve the identity during
    // reconciliation of this child.
    elementType: any,

    // The resolved function/class/ associated with this fiber.
    type: any,

    // The local state associated with this fiber.
    stateNode: any,

    // Remaining fields belong to Fiber

    // The Fiber to return to after finishing processing this one.
    // This is effectively the parent.
    // It is conceptually the same as the return address of a stack frame.
    return: Fiber | null,

    // Singly Linked List Tree Structure.
    child: Fiber | null,
    sibling: Fiber | null,
    index: number,

    // The ref last used to attach this node.
    ref: null | (((handle: mixed) => void) & { _stringRef: ?string, ... }) | RefObject,

    // Input is the data coming into process this fiber. Arguments. Props.
    pendingProps: any, // This type will be more specific once we overload the tag.
    memoizedProps: any, // The props used to create the output.

    // A queue of state updates and callbacks.
    updateQueue: mixed,

    // The state used to create the output
    memoizedState: any,

    mode: TypeOfMode,

    // Effect
    effectTag: SideEffectTag,
    subtreeTag: SubtreeTag,
    deletions: Array<Fiber> | null,

    // Singly linked list fast path to the next fiber with side-effects.
    nextEffect: Fiber | null,

    // The first and last fiber with side-effect within this subtree. This allows
    // us to reuse a slice of the linked list when we reuse the work done within
    // this fiber.
    firstEffect: Fiber | null,
    lastEffect: Fiber | null,

    // This is a pooled version of a Fiber. Every fiber that gets updated will
    // eventually have a pair. There are cases when we can clean up pairs to save
    // memory if we need to.
    alternate: Fiber | null,
};


// В целом скорее теория