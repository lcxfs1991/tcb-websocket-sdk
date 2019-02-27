// eslint-disable-next-line no-unused-vars
const regeneratorRuntime = require('./polyfill');
import io from 'weapp.socket.io';
import Auth from './auth';
import Utils from '../common/utils';

export default class TcbClientWS {

    constructor(url, options = {}) {
        this.io = io;
        this.socket = null;
        this.url = url;
        this.options = options;
        this.roomID = null;
    }

    /**
     * 鉴权对象
     */
    static get auth() {
        return new Auth();
    }

    /**
     *  建立 WebSocket 连接
     */
    open() {
        this.socket = io(this.url, {
            transports: ['websocket'],
            ...this.options
        });
        return this.socket;
    }

    /**
     * 断开 WebSocket 连接
     */
    close() {
        if (this.socket) {
            this.socket.close();
        }
    }

    /**
     * 加入房间
     * @param {String} roomID 房间号
     * @return {Promise}
     */
    async join(roomID) {

        if (this.roomID) {
            await this.leave();
        }

        return new Promise((resolve, reject) => {

            if (!roomID) {
                return reject(new Error('roomID is null.'));
            }

            this.socket.emit('tcb-join-room', roomID, (data) => {
                this.roomID = roomID;
                resolve(data);
            });
        });
    }

    /**
     * 离开房间
     * @param {String} roomIDParam 房间号
     * @return {Promise}
     */
    async leave(roomIDParam = null) {
        let roomID = this.roomID || roomIDParam;
        return new Promise((resolve, reject) => {
            if (!roomID) {
                return reject(new Error('roomID is null.'));
            }
            this.socket.emit('tcb-leave-room', roomID, (data) => {
                this.roomID = null;
                resolve(data);
            });
        });
    }

    /**
     * 发送消息
     * @param {*} param
     * @param {String} param.mode 发送消息的模式
     * @param {String} param.message 消息数据
     * @return {Promise<data>}
     */
    async send({ event, message }) {
        return new Promise((resolve, reject) => {
            this.socket.emit(event, message, (data) => {
                resolve(data);
            });

        });
    }

    receive({ event, callback }) {
        this.socket.on(event, (data, ack) => {
            Utils.isFunction(callback) && callback(data);
            Utils.isFunction(ack) && ack(data);
        });
    }
}
