import { decodedTextSpanIntersectsWith } from "typescript"

type CircleConfig = {
    color?: string,
    radius?: number
}

class CCircle
{
    //required all memebers will always be present
    private config: Required<CircleConfig>

    constructor(config: CircleConfig)
    {
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius?? 0
        }
    }

    drawfunction()
    {
        //no null checking needed
        console.log('Frawing a circle', 'Color:', this.config.color, 'Radius', this.config.radius)
    }
}