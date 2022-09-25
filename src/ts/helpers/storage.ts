const save = (key: string, data: number[]): void => {
    localStorage.setItem(key, JSON.stringify(data));
};

const get = (key: string): number[] => {
    const keyId = JSON.parse(localStorage.getItem(key) as string);
    if (!keyId) {
        return keyId;
    }
    return keyId.map((item: string) => +item);
};

export { save, get };
