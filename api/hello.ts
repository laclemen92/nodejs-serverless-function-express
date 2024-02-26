import type { VercelRequest, VercelResponse } from '@vercel/node'

const testFn = () => {
 return 201384982039112;
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.json({
    number: testFn(),
  })
}
