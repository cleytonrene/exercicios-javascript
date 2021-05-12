function batataQuente(nameList, num) {
    var queue = new Queue()

    for(var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    var eliminado = ''

    while(queue.size() > 1) {
        for(var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminado = queue.dequeue()
        console.log(eliminado + ' foi eliminado!')
    }
    return queue.dequeue()
}