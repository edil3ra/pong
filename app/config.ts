import * as ex from 'excalibur'

export const WIN_WIDTH = 800
export const WIN_HEIGHT = 600
export const GAME_BACKGROUND = ex.Color.Black

export const PADDLE_WIDTH = 100
export const PADDLE_HEIGHT = 20

export const PADDLE_TOP_X = WIN_WIDTH / 2
export const PADDLE_TOP_Y = 10
export const PADDLE_TOP_SPEED = 450
export const PADDLE_TOP_DISTANCE_ACTION = 20

export const PADDLE_BOTTOM_X = WIN_WIDTH / 2
export const PADDLE_BOTTOM_Y = WIN_HEIGHT - PADDLE_HEIGHT + 10
export const PADDLE_BOTTOM_SPEED = 600


export const PADDLE_TOP_COLOR = ex.Color.Green
export const PADDLE_BOTTOM_COLOR = ex.Color.Green


export const BALL_WIDTH = 20
export const BALL_HEIGHT = 20
export const BALL_X = WIN_WIDTH / 2
export const BALL_Y = WIN_HEIGHT / 2
export const BALL_COLOR = ex.Color.Red
export const BALL_MIN_SPEED = 300
export const BALL_MAX_SPEED = 800
export const BALL_FACTOR_SPEED = 75

export const TIME_COLLISION_DETECTION = 20


export const WALL_WIDTH = 5
export const WALL_HEIGHT = WIN_HEIGHT

export const WALL_LEFT_X = 0 + WALL_WIDTH / 2
export const WALL_LEFT_Y = 0 + WALL_HEIGHT / 2
export const WALL_LEFT_COLOR = ex.Color.Yellow


export const WALL_RIGHT_X = WIN_WIDTH - (WALL_WIDTH / 2)
export const WALL_RIGHT_Y = 0 + WALL_HEIGHT / 2
export const WALL_RIGHT_COLOR = ex.Color.Yellow
