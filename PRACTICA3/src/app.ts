import server from 'express'; 
import { Paciente, SignoVital, ControlRealizado } from './routes';
const app = server()
app.use(server.json())

// Aqui puedes configurar tus rutas
app.use('/pacientes', Paciente);
app.use('/signovital', SignoVital);
app.use('/controlrealizado', ControlRealizado);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
