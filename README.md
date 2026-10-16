# Propuesta de Solución

*Sistema web de registro de personas, control de asistencia y notificaciones segmentadas para una iglesia*

## Datos del estudiante

**Nombre:** Abel Gómez

**Correo Institucional:** abel.gomez@tecnologicoliceocristiano.edu.ec

---

## Problema detectado

En [nombre de la iglesia] se realizan servicios regulares los martes (oración), miércoles (oración e intercesión), jueves (enseñanza), sábados (servicio de jóvenes) y domingos (culto general), además de un culto especial de familia un viernes al mes. La iglesia también celebra dos aniversarios: el aniversario general, en noviembre (sábado y domingo), y el aniversario de jóvenes, en septiembre (un sábado). Actualmente el registro de las personas y el control de asistencia se llevan de forma [manual: cuaderno / hojas de Excel / no existe un control formal; confirmar con el pastor o líder], y los avisos de los eventos se dan de manera general, sin distinguir a quién le corresponde cada actividad.

Esta forma de trabajo dificulta:

- Mantener actualizados los datos de las personas (contacto, edad, estado civil, hijos, fecha de ingreso).
- Saber con certeza cuántas personas asisten a cada servicio.
- Avisar de un evento solo a quienes les corresponde (por ejemplo, solo a parejas, a mujeres, a jóvenes o a padres con niños), lo que genera mensajes que no interesan a todos o personas que no se enteran.
- Respetar el medio de contacto que prefiere cada persona (correo, WhatsApp, SMS o llamada).
- Dar a conocer los horarios y cambios temporales, por ejemplo durante toques de queda, cuando los servicios nocturnos terminan como máximo a las 8:00 pm y algunos miembros deben organizar su transporte.
- Generar reportes e informes para la dirección de la iglesia.

El problema afecta al pastor y a los líderes, que carecen de información confiable para tomar decisiones y comunicarse de forma eficiente, y a los miembros y personas nuevas, que pueden no enterarse a tiempo de las actividades o quedar sin acompañamiento.

## Solución propuesta

Desarrollar un **sistema web de registro de personas, control de asistencia y notificaciones segmentadas**, operado por un usuario administrador (encargado del registro), con los siguientes módulos:

1. **Registro de personas:** nombres, apellidos, teléfono, correo, cédula (opcional), fecha de nacimiento (la edad se calcula automáticamente), sexo, estado de relación (soltero, noviazgo, casado, unión libre, divorciado o viudo), años de matrimonio si es casado, fecha de ingreso a la iglesia y canal de notificación preferido (correo, WhatsApp, SMS o llamada). Si la persona tiene hijos, se registra cuántos y, de cada uno, su nombre y fecha de nacimiento.
2. **Categorías:** el sistema clasifica automáticamente a cada persona como *Nuevo* (menos de 3 meses en la congregación) o *Miembro* (3 meses o más), con un umbral configurable. También se asigna un cargo (miembro, líder o pastor) y la pertenencia a uno o varios ministerios o grupos (alabanza, jóvenes, niños, damas, caballeros).
3. **Gestión de servicios y eventos:** creación y programación de los servicios regulares (con su día y horario), el culto de familia mensual y los eventos especiales, indicando fecha, hora y lugar.
4. **Cartelera de horarios y aniversarios:** consulta de los días y horarios de los servicios y de las fechas de los aniversarios (general y de jóvenes), con la posibilidad de registrar cambios temporales de horario, como los ocasionados por toques de queda.
5. **Toma de asistencia:** registro rápido de los asistentes a cada servicio mediante búsqueda por nombre.
6. **Notificaciones por filtro y por preferencia de canal:** el administrador elige a quién avisar combinando filtros, y el sistema muestra cuántas personas recibirán el aviso y por qué canal (por ejemplo: 40 destinatarios, 75% WhatsApp y 25% correo). Cada persona recibe el aviso solo por su canal preferido. El envío puede hacerse de inmediato o programarse, por ejemplo un día antes del evento o en la mañana del mismo día.
7. **Reportes:** asistencia por persona, por servicio y por período, y listados de personas según los filtros aplicados.

### Filtros disponibles para notificar y consultar

| Filtro | Ejemplo de uso |
|---|---|
| Categoría | Nuevos (menos de 3 meses), miembros (3 meses o más) o todos. |
| Edad | Jóvenes de 12 a 18 años; adultos de 25 años en adelante. |
| Sexo | Evento solo para mujeres o solo para hombres. |
| Estado de relación | Evento de parejas: casados y en noviazgo; se excluye a los solteros. |
| Hijos | Evento de niños: padres y madres con hijos en un rango de edad. |
| Cargo o ministerio | Solo líderes, o solo el grupo de alabanza. |
| Canal preferido | Correo, WhatsApp, SMS o llamada. |

**Alcance del envío:** el correo electrónico se enviará de forma automática. Para WhatsApp, el sistema generará la lista de destinatarios con un enlace que abre el chat con el mensaje ya redactado. Para las llamadas, entregará la lista de teléfonos con la opción de marcar a quién ya se contactó. El envío automático por WhatsApp y SMS mediante servicios externos queda como mejora futura.

### Horarios de referencia que manejará el sistema

| Día | Servicio | Horario |
|---|---|---|
| Martes | Oración | 7:00 pm a 9:00 pm |
| Miércoles | Oración (intercesión) | 8:00 am a 12:00 del mediodía |
| Jueves | Enseñanza | 7:00 pm a 9:00 pm |
| Sábado | Servicio de jóvenes | 6:00 pm a 7:30 pm |
| Domingo | Culto general | 9:00 am a 1:00 pm |
| Un viernes al mes | Culto especial de familia | [confirmar horario] |

**Aniversarios:** el aniversario general se celebra en noviembre, dos días (sábado y domingo); el aniversario de jóvenes se celebra en septiembre, un solo día (sábado). Durante toques de queda, los servicios nocturnos terminan como máximo a las 8:00 pm.

### Trabajo futuro (fase 2)

- Alertas de inasistencia: listado de personas que acumulan varias semanas sin asistir, para su seguimiento pastoral.
- Registro de talentos e instrumentos (canto, batería, piano, guitarra, bajo), y gestión de clases y avisos internos por ministerio.
- Envío automático de WhatsApp y SMS mediante servicios externos.
- Roles de usuario adicionales (líderes de grupo y encargado de asistencia), registro por código QR y adaptación como aplicación móvil.

La solución reemplaza el registro manual por una base de datos centralizada, reduce errores y tiempo de registro, y permite comunicarse con cada persona de forma oportuna, por el medio que prefiere y solo sobre lo que le corresponde.

**Tecnologías previstas:** [lenguaje de programación y base de datos que hayas visto en clase, por ejemplo PHP/MySQL, Python/PostgreSQL, etc.]. La interfaz web usará un diseño adaptable (por ejemplo Bootstrap) para poder consultarse desde computadora o celular.

## Viabilidad

- **Técnica:** el sistema se basa en operaciones de base de datos (registrar, consultar, filtrar, actualizar y reportar) y en herramientas de desarrollo que domino o que puedo aprender con la guía del tutor. El envío de correos es automático y gratuito, y para WhatsApp se usa un enlace con mensaje precargado, sin depender de servicios de pago. Se desarrollará por fases: primero los módulos esenciales y luego las mejoras.
- **Operativa:** conozco la iglesia por ser miembro activo, y cuento con el apoyo de [pastor/líder] para la información y las pruebas con usuarios reales. El sistema será operado por un solo administrador, lo que simplifica su uso y mantenimiento.
- **Económica:** el costo es bajo, pues se usarán herramientas gratuitas o de código abierto y el equipo que ya poseo. Para su puesta en marcha solo se requiere un dispositivo con internet [o hosting básico, si se decide publicarlo].
- **Tiempo:** el desarrollo es realizable dentro del período de titulación, con un cronograma por etapas (análisis, diseño, desarrollo, pruebas y documentación) de aproximadamente 12 semanas, considerando mi disponibilidad por trabajo y estudios. Las mejoras de la fase 2 se desarrollarán solo si el tiempo lo permite.
- **Legal:** se aplicarán medidas de protección de datos personales, con consentimiento informado de las personas y, en el caso de menores de edad, de su padre, madre o tutor. Se solicitará únicamente la información necesaria y el acceso estará protegido por usuario y contraseña, conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.

## Amenazas

- **Disponibilidad de tiempo:** por mis responsabilidades laborales y académicas, el tiempo de desarrollo es limitado. *Mitigación:* cronograma realista, uso de los feriados para las tareas más complejas y alcance dividido en funciones obligatorias y de fase 2.
- **Crecimiento del alcance:** durante el desarrollo pueden surgir nuevas solicitudes (talentos, clases, ministerios). *Mitigación:* definir el alcance por escrito desde el inicio, validarlo con el tutor y registrar lo demás como trabajo futuro.
- **Seguridad y privacidad de los datos:** se maneja información personal sensible, incluida la de menores de edad. *Mitigación:* autenticación, consentimiento informado, registro de solo los datos necesarios y respaldos periódicos.
- **Límites de los servicios de mensajería:** el envío automático de WhatsApp y SMS requiere servicios de pago o aprobaciones de terceros. *Mitigación:* uso de correo automático y enlaces de WhatsApp con mensaje precargado, dejando el envío automático como mejora futura.
- **Datos incompletos o desactualizados:** si las personas no entregan sus datos o cambian de teléfono o correo, las notificaciones no llegarán. *Mitigación:* campos obligatorios mínimos y actualización periódica de datos.
- **Cambios de horario por toques de queda u otras causas:** los servicios nocturnos pueden acortarse y algunos miembros dependen de transporte. *Mitigación:* el sistema permitirá modificar el horario de un servicio en una fecha puntual y avisarlo con anticipación.
- **Resistencia al cambio:** algunos líderes podrían preferir el método manual. *Mitigación:* interfaz sencilla, capacitación breve y pruebas con los usuarios.
- **Conectividad:** puede haber fallas de internet durante los servicios. *Mitigación:* diseño ligero y posibilidad de registrar la asistencia después del servicio.
- **Limitaciones de conocimiento técnico:** algunas funciones podrían requerir aprender tecnologías nuevas. *Mitigación:* priorizar lo esencial y recurrir al tutor y a la documentación oficial.
