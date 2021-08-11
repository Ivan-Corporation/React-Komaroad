// Пользовательский хук — это JavaScript-функция,
// имя которой начинается с «use», и которая может вызывать другие хуки.

// Наш hook
const useThatIsOurCustomHook = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};
// Использование
const [searchTerm, setSearchTerm] = useThatIsOurCustomHook(
    'search',
    ''
);