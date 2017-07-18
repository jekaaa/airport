
### Запуск приложения
    npm install
    npm start 
Приложение запустится на 3000 порте, т. е. по адресу localhost:3000
### REST API
***
#### GET
    /api - получить все существующие авиарейсы.
    /api/city - получить все рейсы по определенному городу, который указывается в параметрe city.
    /api/status - получить все рейсы по определенному статусу, который указывается в параметрe status.
#### POST
    /api - добавить авиарейс.
    Параметры должны выглядеть следующим образом:
    {
        number: номер_нового_рейса,
        fromCity: город_вылета,
        toCity: город_прилета,
        type: тип_самолета,
        time: время_нового_рейса,
        realTime: фактическое_время_нового_рейса,
        status: статус_нового_рейса
    }
#### PUT
    /api - изменить существующий рейс.
    Параметры должны выглядеть следующим образом:
    {
        id: id_редактируемого_рейса
        number: новый_номер_рейса,
        fromCity: новый_город_вылета,
        toCity: новый_город_прилета,
        type: новый_тип_самолета,
        time: новое_время_рейса,
        realTime: новое_фактическое_время_рейса,
        status: новый_статус_рейса
    }
#### DELETE
    /api - удалить сущесвующий рейс.
    Параметры должны выглядеть следующим образом:
    {
        id: id_удаляемого_рейса
    }
