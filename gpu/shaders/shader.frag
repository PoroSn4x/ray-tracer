#version 330 core

out vec4 FragColor;
uniform vec2 viewPortSize;
uniform float t;

const float NR_OF_STEPS = 64;
const float MAX_TRAVEL_DIST = 1000;
const float SMALL_STEP = 0.005;

float distance_from_sphere(in vec3 p, in vec3 c, float r)
{
	return length(p-c) - r;
}

float signed_dist_func(in vec3 p)
{
	float displacement = sin(5.0 * p.x + t) * sin(5.0 * p.y + t) * sin(5.0 * p.z + t) * 0.25;
	float sphere = distance_from_sphere(p,vec3(0),1);// + displacement;
	float sphere2 = distance_from_sphere(p, vec3(.5,0,0),1);
	
	//return min(sphere,sphere2);
	//return min((sphere + displacement), sphere2);
	return sphere + displacement;
}

vec3 calculate_normal(in vec3 p)
{
	vec2 stp = vec2(SMALL_STEP,0);
	float xdif = signed_dist_func(p+stp.xyy) - signed_dist_func(p-stp.xyy);
	float ydif = signed_dist_func(p+stp.yxy) - signed_dist_func(p-stp.yxy);
	float zdif = signed_dist_func(p+stp.yyx) - signed_dist_func(p-stp.yyx);

	return normalize(vec3(xdif,ydif,zdif));
}

// ray march along the ray defined by starting point s and direction d
// we assume that d is normalized!
// returns the color that it marches upon
vec3 march(in vec3 s, in vec3 d)
{
	// current point on the ray
	vec3 p = s;

	for(int i = 0; i < NR_OF_STEPS; ++i)
	{
		float dist = signed_dist_func(p);

		if(dist < SMALL_STEP)
		{
			//return vec3(1,0,0);
			vec3 normal = calculate_normal(p);

			vec3 light_pos = vec3(2.0, -5.0, 3.0);
			vec3 dir_to_light = normalize(p - light_pos);
			float dif_intensity = max(0.0, dot(normal, dir_to_light));
			return vec3(1,0,0) * dif_intensity;
		}

		if(dist > MAX_TRAVEL_DIST)
			break;

		p += d * dist;
	}

	return vec3(0.96,0.96,0.86);
}

// we can later update this with a uniform matrix that describes our camera transformations
// for now our camera remains on (0,0,-5), and looks straight at (0,0,0)
vec3 shoot_ray()
{
	vec2 uv = gl_FragCoord.xy / viewPortSize;
	// transforming our uv from [0,1] to [-1,1]
	uv = uv * 2 - vec2(1,1);
	vec3 s = vec3(0,0,-5);
	vec3 dir = normalize(vec3(uv,-1) - s);
	return march(s, dir);
}

void main()
{
   FragColor = vec4(shoot_ray(),1);
}