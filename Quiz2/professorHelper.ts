
export class ProfessorHelper {

    INVALID_DATE = 'Invalid date'
    AMBIGUOUS = 'Ambiguous'

    getAllPermutation = (input: any[]): any[][] => {
        let res: any[][] = []

        const permute = (arr: any[], temp: any[]) => {

            if(arr.length === 0) {
                res.push(temp)
                return
            }

            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), temp.concat(next))
            }
        }

        permute(input, [])

        return res
    }

    padZero = (str: string, length: number): string => {

        while(str.length < length) {
            str = '0' + str
        }

        return str
    }

    answer = (x: number, y: number, z: number): string => {

        if((x !== parseInt(x.toString()))
        || (y !== parseInt(y.toString()))
        || (z !== parseInt(z.toString()))
        ) {
            throw new Error('Inputs must be integer.')
        }

        if(x < 0 || x > 99
        || y < 0 || y > 99
        || z < 0 || z > 99
        ) {
            throw new Error('Invalid date integer.')
        }

        let validCount: number = 0
        let existTimes: number[] = []

        for(let temp of this.getAllPermutation([x, y, z])) {
            const time = Date.parse(temp.join('/'))

            if(!isNaN(time)
            && existTimes.indexOf(time) === -1
            ) {
                validCount += 1
                existTimes.push(time)
            }
        }

        if(validCount === 0) {
            return this.INVALID_DATE
        }

        if(validCount === 1) {
            let temp = new Date(existTimes[0])
            let year = temp.getFullYear().toString().slice(2, 4)
            let month = this.padZero((temp.getMonth() + 1).toString(), 2)
            let date = this.padZero(temp.getDate().toString(), 2)

            return `${month}/${date}/${year}`
        }

        return this.AMBIGUOUS
    }
}

export default new ProfessorHelper()