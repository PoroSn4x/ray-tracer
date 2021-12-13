#include <iostream>
#include "primitives/shape.h"
#include "GLFW/glfw3.h"

void tick();

GLFWwindow* window;

int main()
{
	std::cout << "Hello";
	
	if (!glfwInit())
	{
		// help
	}
	window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);

	tick();

	glfwTerminate();
}

void tick()
{
	while (!glfwWindowShouldClose(window))
	{
		glfwWaitEvents();
	}
}