import { GLBuffer } from '../gl/glBuffer';
import { AttributeInfo } from '../gl/glBuffer';
import { Vector3 } from '../math/vector3';

export class Sprite
{
    private _name : string;
    private _width : number;
    private _height : number;
    private _buffer : GLBuffer;
    public position : Vector3 = new Vector3();

    public constructor( name : string, width : number = 100, height : number =100 )
    {
        this._name = name;
        this._width = width;
        this._height = height;
        console.log('Sprite constructed')
    }


    public load() : void
    {
        this._buffer = new GLBuffer(3);
        let positionAttribute = new AttributeInfo();
        positionAttribute.location = 0
        positionAttribute.offset = 0;
        positionAttribute.size = 3;
        this._buffer.addAttributeLocation( positionAttribute );
        let vertices : number[] =
            [ 0, 0, 0,
              0, this._height, 0,
              this._width, this._height, 0,
            
              this._width, this._height, 0,
              this._width, 0, 0,
              0, 0, 0
            ]

        this._buffer.pushBackData( vertices );
        this._buffer.upload()
        this._buffer.unbind();
    }


    public update( time : number ) : void
    {
    }



    public draw() : void
    {
        this._buffer.bind();
        this._buffer.draw();
    }
}