const Notification = ({ notificacionData }) => {

    const colors = {
        success: '#ff007f',
        error: 'red',
        warning: 'orange',
        info: 'blue'
    }

    const title = {
        success: 'Producto Agregado!',
        error: 'Error',
        warning: 'Advertencia',
        info: 'Informacion'
    }

    const notificationStyle = {
        position: 'fixed',
        top: 100,
        right: 30,
        backgroundColor: colors[notificacionData.type],
        color: 'white',
        padding: 20,
        borderRadius: 10
    }

    return (
        <article style={notificationStyle}>
            <h3>{title[notificacionData.type]}</h3>
            {notificacionData.text}
        </article>
    )
}


export default Notification