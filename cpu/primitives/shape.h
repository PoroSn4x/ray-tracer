#include <vector>
#include <glm/glm.hpp>

class Ray;

class Shape
{
protected:
	glm::vec3 _pos;
	int _color;
	// Some sort of material, basically struct with reflect / refract values. can pick from default ones
public:
	/// <summary>
	/// Fires the given ray at this shape.
	/// If it intersects, it will call ray.collides(this)
	/// </summary>
	/// <param name="r">-> the ray that is being shot at this shape</param>
	virtual void shootAt(Ray* r) = 0;
	int getColor() const { return _color; }
};