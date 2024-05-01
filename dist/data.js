"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detallesConsulta = exports.controlesRealizados = exports.signosVitales = exports.pacientes = void 0;
exports.pacientes = [
    { id: 1, nombre: 'Juan', identificacion: '123456' },
    { id: 2, nombre: 'Maria', identificacion: '654321' },
    { id: 3, nombre: 'Pedro', identificacion: '987654' },
    { id: 4, nombre: 'Luis', identificacion: '987654' },
    { id: 5, nombre: 'Ana', identificacion: '456789' }
];
exports.signosVitales = [
    { id: 1, descripcion: 'Presión Arterial', nivelMinimo: 80, nivelMaximo: 120 },
    { id: 2, descripcion: 'Frecuencia Cardiaca', nivelMinimo: 55, nivelMaximo: 105 },
    { id: 3, descripcion: 'Frecuencia Respiratoria', nivelMinimo: 10, nivelMaximo: 25 },
    { id: 4, descripcion: 'Saturación de Oxígeno', nivelMinimo: 90, nivelMaximo: 100 },
    { id: 5, descripcion: 'Temperatura', nivelMinimo: 35, nivelMaximo: 38 },
    { id: 6, descripcion: 'Presión Arterial', nivelMinimo: 85, nivelMaximo: 125 },
    { id: 7, descripcion: 'Frecuencia Cardiaca', nivelMinimo: 50, nivelMaximo: 110 },
    { id: 8, descripcion: 'Frecuencia Respiratoria', nivelMinimo: 8, nivelMaximo: 30 },
    { id: 9, descripcion: 'Saturación de Oxígeno', nivelMinimo: 92, nivelMaximo: 98 },
    { id: 10, descripcion: 'Temperatura', nivelMinimo: 34, nivelMaximo: 39 }
];
exports.controlesRealizados = [
    { id: 2, idPaciente: 1, idSignoVital: 2, fecha: '2024-01-17', hora: '09:00', valor: 60 },
    { id: 1, idPaciente: 1, idSignoVital: 1, fecha: '2024-01-17', hora: '09:00', valor: 100 },
    { id: 3, idPaciente: 2, idSignoVital: 3, fecha: '2024-02-25', hora: '09:00', valor: 15 },
    { id: 4, idPaciente: 2, idSignoVital: 4, fecha: '2024-02-25', hora: '09:00', valor: 95 },
    { id: 5, idPaciente: 3, idSignoVital: 5, fecha: '2024-03-12', hora: '09:00', valor: 36.5 },
    { id: 6, idPaciente: 3, idSignoVital: 6, fecha: '2024-03-12', hora: '09:00', valor: 110 },
    { id: 7, idPaciente: 4, idSignoVital: 7, fecha: '2024-04-14', hora: '09:00', valor: 55 },
    { id: 8, idPaciente: 4, idSignoVital: 8, fecha: '2024-04-14', hora: '09:00', valor: 12 },
    { id: 9, idPaciente: 5, idSignoVital: 9, fecha: '2024-05-07', hora: '09:00', valor: 95 },
    { id: 10, idPaciente: 5, idSignoVital: 10, fecha: '2024-05-07', hora: '09:00', valor: 36.5 }
];
exports.detallesConsulta = [];
exports.pacientes.map(paciente => {
    const signosVitalesPaciente = exports.signosVitales.filter(signoVital => exports.controlesRealizados.some(control => control.idPaciente === paciente.id && control.idSignoVital === signoVital.id));
    const controlesRealizadosPaciente = exports.controlesRealizados.filter(control => control.idPaciente === paciente.id);
    exports.detallesConsulta.push({
        ...paciente,
        signosVitales: signosVitalesPaciente,
        controlesRealizados: controlesRealizadosPaciente
    });
});
