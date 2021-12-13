set(CPU_SRC_LIST
    "main.cpp"
    "primitives/shape.h"
    "primitives/shape.cpp")

add_executable(${CPU_EXECUTABLE_NAME} ${CPU_SRC_LIST})

source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR} FILES ${CPU_SRC_LIST})

target_include_directories(${CPU_EXECUTABLE_NAME} PUBLIC
                           "${CMAKE_CURRENT_SOURCE_DIR}")

#find_package(OpenGL)
find_package(Vulkan REQUIRED)

target_link_libraries(${CPU_EXECUTABLE_NAME} PUBLIC 
                        glad 
                        glfw
                        #${OPENGL_gl_LIBRARY}
                        Vulkan::Vulkan)