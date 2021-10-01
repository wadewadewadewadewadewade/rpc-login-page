import type { NextApiRequest, NextApiResponse } from 'next';

export type LoginResponse = {
  isValid: true;
} | {
  isValid: false;
  message: string;
}

export default (req: NextApiRequest, res: NextApiResponse<LoginResponse>) => {
  res.status(401).json({
    isValid: false,
    message: 'You entered an incorrect email, password, or both.'
  })
}
