const url = 'https://bnzdevback.jp-api.ru/api/catalog/tradeDays/?statistics=false'

export const tradeDays = async () => {
    return await fetch(url).then(res => res.json())
}