const computeShaderPosition =
  "#define delta (1.0/60.0) \n" +
  "void main() { \n" +
  "vec2 uv = gl_FragCoord.xy / resolution.xy; \n" +
  "vec4 tmpPos = texture2D(texturePosition, uv); \n" +
  "vec3 pos = tmpPos.xyz; \n" +
  "vec4 tmpVel = texture2D(textureVelocity, uv); \n" +
  "vec3 vel = tmpVel.xyz; \n" +
  "float mass = tmpVel.w; \n" +
  "  if (mass == 0.0) {\n" +
  "    vel = vec3(0.0); \n" +
  "} \n" +
  "  // Dynamics\n" +
  "pos += vel * delta; \n" +
  "gl_FragColor = vec4(pos, 1.0); \n" +
  "}";

const computeShaderVelocity =
  "// For PI declaration:\n" +
  "#include <common> \n" +
  "#define delta (1.0/60.0)\n" +
  "uniform float gravityConstant;\n" +
  "uniform float density;\n" +
  "const float width = resolution.x;\n" +
  "const float height = resolution.y;\n" +
  "float radiusFromMass(float mass) {\n" +
  "// Calculate radius of a sphere from mass and density\n" +
  "return pow((3.0 / (4.0 * PI)) * mass / density, 1.0 / 3.0);\n" +
  "}\n" +
  "void main()	{\n" +
  "vec2 uv = gl_FragCoord.xy / resolution.xy;\n" +
  "float idParticle = uv.y * resolution.x + uv.x;\n" +
  "vec4 tmpPos = texture2D(texturePosition, uv);\n" +
  "vec3 pos = tmpPos.xyz;\n" +
  "vec4 tmpVel = texture2D(textureVelocity, uv);\n" +
  "vec3 vel = tmpVel.xyz;\n" +
  "float mass = tmpVel.w;\n" +
  "if (mass > 0.0) {\n" +
  " float radius = radiusFromMass(mass);\n" +
  "    vec3 acceleration = vec3(0.0);\n" +
  "   // Gravity interaction\n" +
  "  for (float y = 0.0; y < height; y++ ) {\n" +
  "   for (float x = 0.0; x < width; x++ ) {\n" +
  "    vec2 secondParticleCoords = vec2(x + 0.5, y + 0.5) / resolution.xy;\n" +
  "   vec3 pos2 = texture2D(texturePosition, secondParticleCoords).xyz;\n" +
  "  vec4 velTemp2 = texture2D(textureVelocity, secondParticleCoords);\n" +
  " vec3 vel2 = velTemp2.xyz;\n" +
  "        float mass2 = velTemp2.w;\n" +
  "       float idParticle2 = secondParticleCoords.y * resolution.x + secondParticleCoords.x;\n" +
  "      if (idParticle == idParticle2) {\n" +
  "       continue;\n" +
  "    }\n" +
  "   if (mass2 == 0.0) {\n" +
  "    continue;\n" +
  " }\n" +
  "vec3 dPos = pos2 - pos;\n" +
  "float distance = length(dPos);\n" +
  "float radius2 = radiusFromMass(mass2);\n" +
  "if (distance == 0.0) {\n" +
  " continue;\n" +
  "}\n" +
  "// Checks collision\n" +
  "if (distance < radius + radius2) {\n" +
  " if (idParticle < idParticle2) {\n" +
  "  // This particle is aggregated by the other\n" +
  " vel = (vel * mass + vel2 * mass2) / (mass + mass2);\n" +
  "mass += mass2;\n" +
  "radius = radiusFromMass(mass);\n" +
  "}\n" +
  "else {\n" +
  "// This particle dies\n" +
  "mass = 0.0;\n" +
  "radius = 0.0;\n" +
  "vel = vec3(0.0);\n" +
  "break;\n" +
  "}\n" +
  "}\n" +
  "float distanceSq = distance * distance;\n" +
  "float gravityField = gravityConstant * mass2 / distanceSq;\n" +
  "gravityField = min(gravityField, 1000.0);\n" +
  "acceleration += gravityField * normalize(dPos);\n" +
  "}\n" +
  "if (mass == 0.0) {\n" +
  " break;\n" +
  "}\n" +
  "}\n" +
  "// Dynamics\n" +
  "vel += delta * acceleration;\n" +
  "}\n" +
  "gl_FragColor = vec4(vel, mass);\n" +
  "}";

const particleVertexShader =
  "     // For PI declaration:\n" +
  "			#include <common>\n" +
  "			uniform sampler2D texturePosition;\n" +
  "			uniform sampler2D textureVelocity;\n" +
  "			uniform float cameraConstant;\n" +
  "			uniform float density;\n" +
  "			varying vec4 vColor;\n" +
  "			float radiusFromMass( float mass ) {\n" +
  "				// Calculate radius of a sphere from mass and density\n" +
  "				return pow(abs( ( 3.0 / ( 4.0 * PI ) ) * mass / density), 1.0 / 3.0 );\n" +
  "			}\n" +
  "			void main() {\n" +
  "				vec4 posTemp = texture2D( texturePosition, uv );\n" +
  "				vec3 pos = posTemp.xyz;\n" +
  "				vec4 velTemp = texture2D( textureVelocity, uv );\n" +
  "				vec3 vel = velTemp.xyz;\n" +
  "				float mass = velTemp.w;\n" +
  "				vColor = vec4( 1.0, mass / 250.0, 0.0, 1.0 );\n" +
  "				vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );\n" +
  "				// Calculate radius of a sphere from mass and density\n" +
  "				//float radius = pow( ( 3.0 / ( 4.0 * PI ) ) * mass / density, 1.0 / 3.0 );\n" +
  "				float radius = radiusFromMass( mass );\n" +
  "				// Apparent size in pixels\n" +
  "				if ( mass == 0.0 ) {\n" +
  "					gl_PointSize = 0.0;\n" +
  "				}\n" +
  "				else {\n" +
  "					gl_PointSize = radius * cameraConstant / ( - mvPosition.z );\n" +
  "				}\n" +
  "				gl_Position = projectionMatrix * mvPosition;\n" +
  "			}";
const particleFragmentShader =
  "varying vec4 vColor; \n" +
  "			void main() {\n" +
  "				float f = length( gl_PointCoord - vec2( 0.5, 0.5 ) );\n" +
  "				if ( f > 0.5 ) {\n" +
  "					discard;\n" +
  "				}\n" +
  "				gl_FragColor = vColor;\n" +
  "			}";


export { computeShaderPosition, computeShaderVelocity, particleVertexShader, particleFragmentShader}





