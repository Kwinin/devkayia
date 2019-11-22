import * as SocketIO from 'socket.io'
import * as loggerConfig from '../module/logger'
import {createLogger} from 'bunyan'


const Logger = createLogger({
  ...loggerConfig('service.push'),
  namespace: '/push',
} as any)

let nsp: SocketIO.Namespace
export default function (server: SocketIO.Server) {
  nsp = server.of('/push')

  nsp.on('connection', async (socket: SocketIO.Socket) => {
    socket.emit('hello', {message: 'hello'})
    socket.on('disconnect', async (reason: string) => {
      Logger.error('disconnect', {reason})
    })
  })
}
